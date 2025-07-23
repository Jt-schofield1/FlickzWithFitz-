'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { photos, Photo } from '@/data/photos';
import GalleryGrid from '@/components/GalleryGrid';

export default function PortfolioPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.05, rootMargin: '50px' });

  return (
    <div className="pt-24 md:pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-dark06 via-dark06 to-dark03 overflow-hidden pt-8 md:pt-0 pb-12 md:pb-0"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-20 w-96 h-96 bg-purple-300/35 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-purple-500/20 to-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-500/70 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 7 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-grey70 mb-8 max-w-3xl mx-auto leading-relaxed">
              A curated collection of my photography work across different styles and categories. 
              Each image tells a unique story and captures precious moments in time.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">{photos.length}</div>
                <div className="text-grey70 text-sm sm:text-base">Total Photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">All</div>
                <div className="text-grey70 text-sm sm:text-base">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">{photos.filter(p => p.featured).length}</div>
                <div className="text-grey70 text-sm sm:text-base">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">10+</div>
                <div className="text-grey70 text-sm sm:text-base">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        ref={galleryRef}
        className="py-8 md:py-20 bg-dark03 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/25 to-purple-300/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-b from-purple-300/18 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GalleryGrid photos={photos} />
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Description */}
      <section className="py-20 bg-dark06 relative overflow-hidden">
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Behind Every Photo
              </h2>
              <p className="text-grey70 text-lg leading-relaxed mb-6">
                Each photograph in my portfolio represents a moment of connection, creativity, and technical excellence. 
                From intimate portraits that reveal personality to sweeping landscapes that capture nature's grandeur, 
                every image is crafted with attention to detail and artistic vision.
              </p>
              <p className="text-grey70 text-lg leading-relaxed">
                My approach combines traditional photography principles with modern techniques, ensuring that 
                each client receives timeless images that will be treasured for generations to come.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-dark12 p-6 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-2">Professional Equipment</h3>
                <p className="text-grey70">State-of-the-art cameras and lenses for exceptional image quality</p>
              </div>
              <div className="bg-dark12 p-6 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-2">Expert Editing</h3>
                <p className="text-grey70">Meticulous post-processing to enhance every photograph's impact</p>
              </div>
              <div className="bg-dark12 p-6 rounded-lg">
                <h3 className="text-white font-bold text-xl mb-2">Artistic Vision</h3>
                <p className="text-grey70">Unique perspective and creative composition in every shot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple55 to-purple55/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Love What You See?
          </h2>
          <p className="text-xl text-purple90 mb-8 max-w-2xl mx-auto">
            Let's create stunning photographs together. Every project is an opportunity to tell your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:!text-purple-700 transition-all duration-300"
            >
              Book a Session
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:!text-purple-700 transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 