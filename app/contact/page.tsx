'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { about } from '@/data/about';

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/mblkgqkz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          location: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'camfitz22@gmail.com',
      link: 'mailto:camfitz22@gmail.com',
      description: 'Send me a detailed message'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '(814) 232-4015',
      link: 'tel:814-232-4015',
      description: 'Call for immediate assistance'
    },
    {
      icon: '📍',
      title: 'Location',
      value: about.location,
      link: '#',
      description: 'Based in the Bay Area'
    },
    {
      icon: '💬',
      title: 'Response Time',
      value: '24 hours',
      link: '#',
      description: 'Typical response time'
    }
  ];

  const eventTypes = [
    'Portrait Session',
    'Wedding Photography',
    'Event Photography',
    'Commercial Shoot',
    'Landscape Photography',
    'Family Photography',
    'Corporate Headshots',
    'Other'
  ];

  const budgetRanges = [
    'Under $500',
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    'Over $10,000'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-dark03 via-dark06 to-dark08 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Purple Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-16 w-80 h-80 bg-purple-500/35 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-16 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-purple-500/25 to-purple-300/25 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -70, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
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
              Let's Work Together
            </h1>
            <p className="text-xl text-grey70 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to capture your special moments? I'd love to hear about your project and 
              discuss how we can bring your vision to life through photography.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple55 mb-2">24hrs</div>
                <div className="text-grey70">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple55 mb-2">Free</div>
                <div className="text-grey70">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple55 mb-2">Custom</div>
                <div className="text-grey70">Packages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple55 mb-2">Local</div>
                <div className="text-grey70">Erie PA</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-dark06 relative overflow-hidden">
        {/* Purple Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-80 h-80 bg-purple-300/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-purple-500/18 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-dark12 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-2">Send Me a Message</h2>
                <p className="text-grey70 mb-8">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <p className="text-green-400">✓ Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                    <p className="text-red-400">✗ Something went wrong. Please try again or contact me directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-dark20 border border-dark30 text-white rounded-lg px-4 py-3 focus:border-purple55 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-dark20 border border-dark30 text-white rounded-lg px-4 py-3 focus:border-purple55 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-dark20 border border-dark30 text-white rounded-lg px-4 py-3 focus:border-purple55 focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-white font-semibold mb-2">
                        Photography Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-dark20 border border-dark30 text-white rounded-lg px-4 py-3 focus:border-purple55 focus:outline-none transition-colors"
                        style={{
                          colorScheme: 'dark'
                        }}
                      >
                        <option value="" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>Select a service</option>
                        {eventTypes.map(type => (
                          <option key={type} value={type} style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-white font-semibold mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full bg-dark20 border border-dark30 text-white rounded-lg px-4 py-3 focus:border-purple55 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-white font-semibold mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-dark20 border border-dark30 text-white rounded-lg px-4 py-3 focus:border-purple55 focus:outline-none transition-colors"
                        style={{
                          colorScheme: 'dark'
                        }}
                      >
                        <option value="" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>Select budget range</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range} style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-white font-semibold mb-2">
                      Event Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full bg-dark20 border border-dark30 text-white rounded-lg px-4 py-3 focus:border-purple55 focus:outline-none transition-colors"
                      placeholder="City, venue, or general area"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Tell Me About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-dark20 border border-dark30 text-white rounded-lg px-4 py-3 focus:border-purple55 focus:outline-none transition-colors resize-none"
                      placeholder="Describe your photography needs, vision, special requirements, or any questions you have..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple55 to-purple55/80 text-white font-semibold py-4 rounded-lg hover:shadow-lg hover:shadow-purple55/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-grey70 text-lg leading-relaxed mb-8">
                  I'm always excited to hear about new projects and collaborate with amazing people. 
                  Whether you're planning a wedding, need professional headshots, or want to capture a special moment, 
                  let's discuss how we can create something beautiful together.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    className="bg-dark12 rounded-lg p-6 hover:bg-dark20 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-1">{method.title}</h3>
                        <p className="text-purple55 font-semibold mb-1">
                          {method.link.startsWith('mailto:') || method.link.startsWith('tel:') ? (
                            <a href={method.link} className="hover:text-purple90 transition-colors">
                              {method.value}
                            </a>
                          ) : (
                            method.value
                          )}
                        </p>
                        <p className="text-grey70 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-dark12 rounded-lg p-6">
                <h3 className="text-white font-bold text-xl mb-4">Business Hours</h3>
                <div className="space-y-2 text-grey70">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday - Saturday</span>
                    <span>Sessions by arrangement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <p className="text-grey50 text-sm mt-4">
                  * Flexible scheduling available to accommodate your needs
                </p>
              </div>

              {/* Social Links */}
              <div className="bg-dark12 rounded-lg p-6">
                <h3 className="text-white font-bold text-xl mb-4">Follow My Work</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/cameronnfitzsimmons/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark20 rounded-lg flex items-center justify-center text-grey50 hover:text-purple55 hover:bg-dark30 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark03">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Before You Reach Out
            </h2>
            <p className="text-lg text-grey70">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you respond?",
                answer: "I typically respond to all inquiries within 24 hours, often much sooner during business hours."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! I offer complimentary consultations to discuss your project and ensure we're a perfect fit."
              },
              {
                question: "What information should I include?",
                answer: "Please share your event type, preferred dates, location, budget range, and any special requirements."
              },
              {
                question: "Can you work outside the Bay Area?",
                answer: "Absolutely! I'm available for destination shoots. Travel fees may apply for locations outside my standard service area."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-dark12 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <h3 className="text-white font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-grey70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 