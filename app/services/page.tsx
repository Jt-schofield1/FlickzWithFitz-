'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '@/data/services';
import ServicesList from '@/components/ServicesList';
import Link from 'next/link';

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [packagesRef, packagesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, requirements, and preferences to plan the perfect shoot.',
      icon: '💬'
    },
    {
      step: '02',
      title: 'Pre-shoot Planning',
      description: 'Location scouting, styling recommendations, and timeline creation for your session.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Photography Session',
      description: 'Professional photography session with expert guidance and creative direction.',
      icon: '📸'
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Careful editing and retouching to enhance every image to perfection.',
      icon: '✨'
    },
    {
      step: '05',
      title: 'Final Delivery',
      description: 'High-resolution images delivered in your preferred format with full licensing.',
      icon: '🎁'
    }
  ];

  const weddingPackages = [
    {
      name: 'Basic',
      price: '$1,000',
      duration: 'Up to 8 hours',
      images: 'Up to 100',
      features: [
        'Wedding day only coverage',
        'Up to 8 hours of shooting',
        'Up to 100 edited pictures',
        'Online gallery delivery',
        'High-resolution downloads'
      ],
      popular: false
    },
    {
      name: 'Classic',
      price: '$2,000',
      duration: 'Multi-day coverage',
      images: 'Up to 200',
      features: [
        'Engagement session up to 30 minutes',
        'Rehearsal coverage up to 2 hours',
        'Wedding day coverage up to 8 hours',
        'Up to 200 edited pictures',
        'Preliminary consultation',
        'Personalized timeline customization'
      ],
      popular: true
    },
    {
      name: 'Signature',
      price: '$3,000',
      duration: 'Extended coverage',
      images: 'Up to 300',
      features: [
        'Engagement session up to 1 hour',
        'Rehearsal coverage up to 2 hours',
        'Wedding day coverage up to 10 hours',
        'Up to 300 edited pictures',
        'Preliminary consultation',
        'Personalized timeline customization'
      ],
      popular: true
    },
    {
      name: 'Full Story',
      price: '$4,000',
      duration: 'Complete coverage',
      images: '400+',
      features: [
        'Engagement session up to 1 hour',
        'Rehearsal coverage up to 3 hours',
        'Wedding day coverage up to 12 hours',
        '400+ edited pictures',
        'Access to full gallery',
        'Preliminary consultation',
        'Personalized timeline customization'
      ],
      popular: false
    }
  ];

  const portraitPackages = [
    {
      name: 'Mini Session',
      price: '$200',
      duration: '30 minutes',
      images: '5+',
      features: [
        'Up to 30 minutes session time',
        '1 outfit and 1 location',
        '5+ edited pictures delivered online',
        'Great for headshots and social media',
        'High-resolution downloads included'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '$300',
      duration: '1 hour',
      images: '10+',
      features: [
        'Up to 1 hour session time',
        '1 outfit and 1 location',
        '10+ edited pictures delivered online',
        'Ideal for couples and personal branding',
        'Online gallery with high-resolution downloads'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$400',
      duration: '90 minutes',
      images: '20+',
      features: [
        'Up to 90 minutes session time',
        'Option of 2 outfits and 2 locations',
        '20+ edited pictures delivered',
        'Access to full gallery of all pictures',
        'Preliminary consultation included'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-24 md:pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-dark03 via-dark06 to-dark08 overflow-hidden pt-8 md:pt-0"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-80 h-80 bg-purple-500/35 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-purple-500/25 to-purple-300/25 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/70 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
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
              Photography Services
            </h1>
            <p className="text-xl text-grey70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional photography services tailored to capture your unique moments. 
              From intimate portraits to grand celebrations, I bring artistic vision and technical excellence to every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:!text-purple-700 transition-all duration-300"
              >
                Book Consultation
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:!text-purple-700 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-dark06 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/35 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What I Offer
            </h2>
            <p className="text-lg text-grey70 max-w-2xl mx-auto">
              Comprehensive photography services for every occasion and need
            </p>
          </div>
          
          <ServicesList services={services} showAll={true} />
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        ref={processRef}
        className="py-20 bg-dark03 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={processInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/25 to-purple-300/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/35 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-b from-purple-300/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Process
            </h2>
            <p className="text-lg text-grey70 max-w-2xl mx-auto">
              A streamlined approach ensuring exceptional results every time
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple55 to-purple90 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark12 text-purple55 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple55 to-transparent -translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-grey70 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Wedding Packages Section */}
      <motion.section
        ref={packagesRef}
        className="py-20 bg-dark06"
        initial={{ opacity: 0, y: 50 }}
        animate={packagesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Wedding Photography Packages
            </h2>
            <p className="text-lg text-grey70 max-w-2xl mx-auto">
              Comprehensive wedding photography packages to capture your special day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {weddingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative bg-dark12 rounded-xl p-8 ${
                  pkg.popular ? 'ring-2 ring-purple55' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-purple55 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-purple55 mb-4">{pkg.price}</div>
                  <div className="text-grey70">
                    {pkg.duration} • {pkg.images} images
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-grey70 text-sm">
                      <div className="text-purple55 mr-3 mt-1">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-purple55 text-white hover:bg-purple55/90'
                      : 'bg-dark20 text-white hover:bg-purple55'
                  }`}
                >
                  Choose Package
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center text-grey70 text-sm mb-12">
            <p className="mb-2"><strong>Optional Extras for any package:</strong></p>
            <p>Second shooter ($750) • USB drive ($30)</p>
            <p className="mt-2 text-xs">Number of photos is an estimate. Prices subject to change based on time, date, location.</p>
          </div>

          {/* Portrait Packages Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Portrait Session Packages
            </h2>
            <p className="text-lg text-grey70 max-w-2xl mx-auto">
              Professional portrait sessions for individuals, couples, and families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portraitPackages.map((pkg, index) => (
              <motion.div
                key={index}
                className={`relative bg-dark12 rounded-xl p-8 ${
                  pkg.popular ? 'ring-2 ring-purple55' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: (index + 4) * 0.1 }}
              >
                {pkg.popular && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-purple55 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-purple55 mb-4">{pkg.price}</div>
                  <div className="text-grey70">
                    {pkg.duration} • {pkg.images} images
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-grey70">
                      <div className="text-purple55 mr-3 mt-1">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-purple55 text-white hover:bg-purple55/90'
                      : 'bg-dark20 text-white hover:bg-purple55'
                  }`}
                >
                  Choose Package
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center text-grey70 text-sm mt-12">
            <p>All portrait sessions include online gallery and high-resolution downloads.</p>
            <p className="mt-2 text-xs">Prices subject to change based on time, date, location.</p>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark03">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-grey70">
              Common questions about my photography services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "I recommend booking 2-4 weeks in advance for regular sessions, and 2-3 months for weddings and special events to ensure availability."
              },
              {
                question: "What's included in the session fee?",
                answer: "The session fee includes the photography time, basic editing, online gallery access, and personal usage rights. Additional services like prints or commercial licensing are available separately."
              },
              {
                question: "Can I request specific editing styles?",
                answer: "Absolutely! I work closely with clients to achieve their desired aesthetic while maintaining my signature style. We'll discuss your preferences during the consultation."
              },
              {
                question: "Do you travel for sessions?",
                answer: "Yes, I'm available for travel throughout Erie Pennsylvania and surrounding areas. Travel fees may apply for locations outside my standard service area."
              },
              {
                question: "How long until I receive my photos?",
                answer: "You'll receive a preview gallery within 48-72 hours, and the full edited gallery is typically delivered within 1-2 weeks depending on the session type."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-dark12 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              >
                <h3 className="text-white font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-grey70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple55 to-purple55/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple90 mb-8 max-w-2xl mx-auto">
            Let's discuss your photography needs and create something amazing together. 
            Every great photo starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:!text-purple-700 transition-all duration-300"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:!text-purple-700 transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 