'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getFeaturedPhotos } from '@/data/photos';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { getPopularServices } from '@/data/services';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const featuredPhotos = getFeaturedPhotos();
  const featuredTestimonials = getFeaturedTestimonials();
  const popularServices = getPopularServices();

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const categories = [
    'EVENT PHOTOGRAPHY',
    'COMMERCIAL PHOTOGRAPHY', 
    'PRODUCT PHOTOGRAPHY',
    'WEDDING PHOTOGRAPHY',
    'LANDSCAPE PHOTOGRAPHY',
    'BRANDING PHOTOGRAPHY',
    'PORTRAIT PHOTOGRAPHY'
  ];

  // Floating photos data - truly random positioning (avoiding text area)
  const floatingPhotos = [
    { src: '/photos/IMG_7950.jpeg', delay: 0, x: '65%', y: '12%', size: 'w-24 h-24' },
    { src: '/photos/IMG_7951.jpeg', delay: 0.8, x: '85%', y: '35%', size: 'w-28 h-28' },
    { src: '/photos/IMG_7952.jpeg', delay: 1.2, x: '15%', y: '8%', size: 'w-20 h-20' },
    { src: '/photos/IMG_7953.jpeg', delay: 1.8, x: '5%', y: '55%', size: 'w-32 h-32' },
    { src: '/photos/IMG_7954.jpeg', delay: 2.2, x: '25%', y: '85%', size: 'w-24 h-24' },
    { src: '/photos/IMG_7955.jpeg', delay: 2.8, x: '75%', y: '62%', size: 'w-20 h-20' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen bg-dark03 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple55/10 via-dark03 to-dark06"
            animate={{ 
              background: [
                "linear-gradient(135deg, rgba(74, 44, 237, 0.1) 0%, #070708 50%, #0a0a0b 100%)",
                "linear-gradient(225deg, rgba(74, 44, 237, 0.15) 0%, #070708 50%, #0a0a0b 100%)",
                "linear-gradient(315deg, rgba(74, 44, 237, 0.1) 0%, #070708 50%, #0a0a0b 100%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Floating Photos - Mobile Responsive */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className={`absolute w-16 h-16 ${photo.size === 'w-20 h-20' ? 'sm:w-20 sm:h-20' : photo.size === 'w-24 h-24' ? 'sm:w-24 sm:h-24' : photo.size === 'w-28 h-28' ? 'sm:w-28 sm:h-28' : photo.size === 'w-32 h-32' ? 'sm:w-32 sm:h-32' : 'sm:w-24 sm:h-24'} rounded-xl sm:rounded-2xl overflow-hidden opacity-15 sm:opacity-20 hover:opacity-30 sm:hover:opacity-40 transition-opacity duration-500`}
              style={{ left: photo.x, top: photo.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={heroInView ? { 
                opacity: 0.25,
                scale: 1,
                x: [0, 20, -15, 8, 0],
                y: [0, -15, 20, -8, 0],
                rotate: [0, 12, -8, 15, 0]
              } : {}}
              transition={{ 
                opacity: { duration: 1.2, delay: photo.delay },
                scale: { duration: 1.2, delay: photo.delay },
                x: { 
                  duration: 16 + index * 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: photo.delay 
                },
                y: { 
                  duration: 18 + index * 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: photo.delay 
                },
                rotate: { 
                  duration: 14 + index * 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: photo.delay 
                }
              }}
            >
              <Image
                src={photo.src}
                alt="Portfolio Preview"
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Particle Effects - Reduced on mobile */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple55/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

                {/* Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Regular text part */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
                  STUNNING PHOTOGRAPHY BY{' '}
                  
                  {/* Enhanced Visible Name */}
                  <motion.span 
                    className="block font-extrabold mt-2 sm:mt-4 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    {/* Background glow for visibility */}
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple55 via-purple-300 to-purple55 blur-sm">
                      CAMERON FITZSIMMONS
                    </span>
                    {/* Main text with stronger contrast */}
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white drop-shadow-lg">
                      CAMERON FITZSIMMONS
                    </span>
                    {/* Additional purple glow */}
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple55 via-purple-400 to-purple55 opacity-60">
                      CAMERON FITZSIMMONS
                    </span>
                  </motion.span>
                </h1>

                {/* Animated tagline */}
                <motion.p 
                  className="text-lg sm:text-xl text-grey70 mb-6 sm:mb-8 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Capturing life's most precious moments through artistic vision and storytelling
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced Button */}
            <motion.div
              className="flex justify-center lg:justify-end mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-purple55 to-purple-600 text-white font-bold text-base sm:text-lg lg:text-xl rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple55/30 transform overflow-hidden"
                >
                  {/* Button background animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple55 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Button content */}
                  <span className="relative z-10 mr-2 sm:mr-4">LET'S WORK TOGETHER</span>
                  <motion.svg 
                    className="relative z-10 w-5 h-5 sm:w-6 sm:h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                  
                  {/* Sparkle effects - hidden on mobile to reduce complexity */}
                  <div className="absolute inset-0 pointer-events-none hidden sm:block">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>


      </motion.section>

      {/* Photography Categories */}
      <motion.section
        ref={categoriesRef}
        className="relative py-12 bg-gradient-to-r from-dark03 via-dark06 to-dark03 border-y border-dark20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-purple55/10 via-transparent to-purple55/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple55/5 to-transparent"></div>
        </div>
        
        {/* Floating accent dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple55/20 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${25 + (i % 3) * 25}%`,
              }}
              animate={{
                scale: [0.5, 1, 0.5],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Scroll indicators */}
        <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-dark06 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-dark06 to-transparent z-20 pointer-events-none"></div>

        {/* Left scroll indicator */}
        <motion.div
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 opacity-60 hover:opacity-100 transition-opacity duration-300"
          animate={{ x: [-2, 2, -2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 bg-dark12 rounded-full flex items-center justify-center border border-purple55/30 backdrop-blur-sm">
            <svg className="w-4 h-4 text-purple55" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </motion.div>

        {/* Right scroll indicator */}
        <motion.div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 opacity-60 hover:opacity-100 transition-opacity duration-300"
          animate={{ x: [2, -2, 2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 bg-dark12 rounded-full flex items-center justify-center border border-purple55/30 backdrop-blur-sm">
            <svg className="w-4 h-4 text-purple55" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>

        {/* Mobile scroll hint */}
        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30 opacity-50 sm:hidden"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center space-x-2 text-xs text-grey70">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Swipe to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>

        <div className="relative z-10 max-w-full px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="flex items-center justify-start sm:justify-center space-x-8 sm:space-x-12 overflow-x-auto pb-4 scroll-smooth"
            initial={{ opacity: 0 }}
            animate={categoriesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                className="flex items-center space-x-3 whitespace-nowrap group cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                animate={categoriesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Enhanced animated dot */}
                <motion.div 
                  className="w-2 h-2 bg-gradient-to-r from-purple55 to-purple-400 rounded-full flex-shrink-0 relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(74, 44, 237, 0.3)',
                      '0 0 0 4px rgba(74, 44, 237, 0.1)',
                      '0 0 0 0 rgba(74, 44, 237, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  {/* Inner glow */}
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* Enhanced text with hover effects */}
                <motion.span 
                  className="text-grey70 font-medium text-sm tracking-wider group-hover:text-purple-200 transition-colors duration-300 relative"
                  whileHover={{ 
                    textShadow: '0 0 8px rgba(74, 44, 237, 0.5)' 
                  }}
                >
                  {category}
                  {/* Subtle underline on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple55 to-purple-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Masonry Gallery */}
      <motion.section
        ref={galleryRef}
        className="py-24 bg-dark03"
        initial={{ opacity: 0, y: 50 }}
        animate={galleryInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout */}
          <motion.div
            className="md:hidden grid grid-cols-2 gap-3 auto-rows-fr"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {featuredPhotos.slice(0, 6).map((photo, index) => (
              <motion.div
                key={photo.id}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Layout */}
          <motion.div
            className="hidden md:grid grid-cols-12 gap-4 h-[700px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Large Image 1 */}
            <motion.div 
              className="col-span-4 row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/photos/IMG_7950.jpeg"
                alt="Photography Portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">Photography Portfolio</span>
              </div>
            </motion.div>

            {/* Medium Image 1 */}
            <motion.div 
              className="col-span-4 relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/photos/IMG_7951.jpeg"
                alt="Photography Portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">Photography Portfolio</span>
              </div>
            </motion.div>

            {/* Large Image 2 */}
            <motion.div 
              className="col-span-4 row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/photos/IMG_7952.jpeg"
                alt="Photography Portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">Photography Portfolio</span>
              </div>
            </motion.div>

            {/* Small Image 1 */}
            <motion.div 
              className="col-span-2 relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/photos/IMG_7953.jpeg"
                alt="Photography Portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Medium Image 2 */}
            <motion.div 
              className="col-span-6 relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/photos/IMG_7954.jpeg"
                alt="Photography Portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">Photography Portfolio</span>
              </div>
            </motion.div>

            {/* Large Image 3 */}
            <motion.div 
              className="col-span-4 row-span-2 relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/photos/IMG_7955.jpeg"
                alt="Photography Portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">Photography Portfolio</span>
              </div>
            </motion.div>

            {/* Small Image 2 */}
            <motion.div 
              className="col-span-2 relative overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/photos/IMG_7956.jpeg"
                alt="Photography Portfolio"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        className="py-24 bg-dark06"
        initial={{ opacity: 0, y: 50 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Section Header */}
              <div className="mb-8">
                <div className="text-sm text-grey70 tracking-wider mb-4">ABOUT</div>
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  I AM CAMERON
                </h2>
              </div>

              {/* Introduction */}
              <div className="mb-12">
                <p className="text-grey70 leading-relaxed text-lg mb-6">
                  My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it.
                </p>
                <p className="text-grey70 leading-relaxed">
                  Every photograph tells a story, and I'm here to help you tell yours through artistic vision and authentic storytelling.
                </p>
              </div>

              {/* Contact & Social */}
              <div className="border-t border-dark20 pt-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-grey70 text-sm">Email</span>
                        <p className="text-white">flickzwithfitz@outlook.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-4">Connect</h3>
                    <div className="flex space-x-3 mb-6">
                                             <a 
                         href="https://www.instagram.com/flickzwithfitz/?utm_source=ig_web_button_share_sheet" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-10 h-10 bg-dark12 rounded-full flex items-center justify-center hover:bg-purple55 transition-colors"
                       >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link 
                        href="/contact"
                        className="px-6 py-3 border border-gray-400 text-gray-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 text-center"
                      >
                        Let's Work Together
                      </Link>
                      <Link 
                        href="/portfolio"
                        className="px-6 py-3 border border-gray-400 text-gray-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 text-center"
                      >
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Clean Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="w-full h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/photos/image0 (1).jpeg"
                    alt="Cameron Fitzsimmons - Professional Photographer"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark06/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Subtle accent element */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple55 to-purple-400 rounded-2xl opacity-80 blur-sm"></div>
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple55 to-purple-400 rounded-full opacity-60 blur-sm"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Preview Section */}
      <motion.section
        ref={servicesRef}
        className="py-24 bg-dark03"
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm text-grey70 tracking-wider mb-4">SERVICES</div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MY PHOTOGRAPHY SERVICES
            </motion.h2>
            
            <div className="flex justify-end mb-8">
              <Link 
                href="/services"
                className="inline-flex items-center text-white hover:text-purple55 transition-colors"
              >
                View All Services →
              </Link>
            </div>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {popularServices.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-dark12 rounded-2xl p-8 hover:bg-dark20 transition-all duration-300 hover:scale-105 transform group border border-dark30"
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple55 transition-colors">
                  {service.title}
                </h3>
                <p className="text-grey70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-purple55 font-semibold hover:text-purple-400 transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        className="py-24 bg-dark06"
        initial={{ opacity: 0, y: 50 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-sm text-grey70 tracking-wider mb-4">TESTIMONIALS</div>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              WHAT MY CLIENTS SAY
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={testimonialsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TestimonialCarousel testimonials={featuredTestimonials} />
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple55 via-purple-600 to-purple55 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple55/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Capture Your Moments?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's work together to create stunning photographs that tell your unique story and preserve your most precious memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 transform"
            >
              <span className="group-hover:!text-purple-600 transition-colors duration-300">Start Your Project</span>
              <svg className="ml-3 w-5 h-5 group-hover:!text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 transform"
            >
              <span className="group-hover:!text-purple-600 transition-colors duration-300">View Portfolio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 