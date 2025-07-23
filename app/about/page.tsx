'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { about } from '@/data/about';
import Image from 'next/image';

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [bioRef, bioInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    { name: 'Portrait Photography', level: 95, icon: '👤', rating: 5 },
    { name: 'Wedding Photography', level: 92, icon: '💍', rating: 5 },
    { name: 'Event Photography', level: 88, icon: '🎉', rating: 4 },
    { name: 'Landscape Photography', level: 85, icon: '🏔️', rating: 4 },
    { name: 'Photo Editing', level: 90, icon: '🎨', rating: 5 },
    { name: 'Adobe Lightroom', level: 95, icon: '📸', rating: 5 },
    { name: 'Adobe Photoshop', level: 88, icon: '🖼️', rating: 4 },
    { name: 'Studio Lighting', level: 92, icon: '💡', rating: 5 },
  ];

  const experience = [
    {
      year: '2016 - Present',
      title: 'Professional Photographer',
      company: 'FlickzWithFitz',
      description: 'Full-service photography business specializing in portraits, weddings, and events.',
    },
    {
      year: '2012 - 2016',
      title: 'High School Photographer',
      company: 'Local High School',
      description: 'Yearbook photography, senior pictures, and school event coverage.',
    },
    {
      year: '2010 - 2012',
      title: 'Photography Hobbyist',
      company: 'Personal',
      description: 'Developed passion for photography, learning fundamentals and experimenting with different styles.',
    },
  ];



  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark03 via-dark06 to-dark08 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-purple-500/20 to-purple-300/25 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/60 rounded-full"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple55 to-purple90">
                  Cameron
                </span>
              </h1>
              <p className="text-xl text-grey70 mb-8 leading-relaxed">
                Passionate photographer dedicated to capturing life's most precious moments 
                with artistic vision and technical excellence.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple55 mb-2">10+</div>
                  <div className="text-grey70 text-sm sm:text-base">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple55 mb-2">100+</div>
                  <div className="text-grey70 text-sm sm:text-base">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple55 mb-2">50+</div>
                  <div className="text-grey70 text-sm sm:text-base">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple55/20 to-transparent z-10"></div>
                <Image
                  src="/photos/image0 (1).jpeg"
                  alt="Cameron Fitzsimmons - Professional Photographer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Biography Section */}
      <motion.section
        ref={bioRef}
        className="py-20 bg-gradient-to-b from-dark06 via-dark06 to-dark03 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={bioInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-purple-500/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-300/35 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-purple-300/12 via-purple-500/8 to-purple-300/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] bg-gradient-to-t from-purple-500/12 to-purple-300/8 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 left-10 w-[400px] h-[400px] bg-purple-300/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-60 left-0 right-0 h-[800px] bg-gradient-to-b from-transparent via-purple-500/5 to-purple-300/8 blur-xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Story</h2>
            <p className="text-lg text-grey70">The journey that led me to photography</p>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-grey70 text-base sm:text-lg leading-relaxed mb-6 space-y-4">
              {about.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <p className="text-grey70 text-base sm:text-lg leading-relaxed mb-6">
              Based in {about.location}, I've had the privilege of working with clients from all walks of life, 
              each bringing their unique story to be captured. My approach combines technical expertise with 
              genuine human connection, ensuring that every photograph tells an authentic story.
            </p>
            <p className="text-grey70 text-base sm:text-lg leading-relaxed">
              When I'm not behind the camera, you can find me exploring new locations for inspiration, 
              experimenting with different lighting techniques, or mentoring aspiring photographers. 
              I believe that great photography is not just about capturing moments, but about preserving 
              emotions and memories that will be cherished for generations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        className="py-20 bg-gradient-to-b from-dark03 via-dark03 to-dark06 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[200px] bg-gradient-to-b from-purple-300/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-purple-300/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-purple-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            <p className="text-lg text-grey70">Professional competencies and technical skills</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-dark12 p-6 rounded-lg hover:bg-dark20 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center">
                  <div className="text-4xl mr-6">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-xl">{skill.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        ref={experienceRef}
        className="py-20 bg-dark06 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={experienceInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-300/35 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Journey</h2>
            <p className="text-lg text-grey70">Professional experience and growth</p>
          </div>
          
          {/* Experience Timeline */}
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-purple55"
                  initial={{ opacity: 0, x: -20 }}
                  animate={experienceInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="absolute w-4 h-4 bg-purple55 rounded-full -left-2 top-0"></div>
                  <div className="text-purple90 text-sm font-semibold mb-1">{exp.year}</div>
                  <h3 className="text-white text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="text-grey70 font-semibold mb-2">{exp.company}</div>
                  <p className="text-grey70">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple55 to-purple55/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-purple90 mb-8 max-w-2xl mx-auto">
            Ready to capture your special moments? I'd love to hear about your project and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:!text-purple-700 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:!text-purple-700 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 