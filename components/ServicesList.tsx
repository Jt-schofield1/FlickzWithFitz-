'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Service } from '@/data/services';
import Link from 'next/link';

interface ServicesListProps {
  services: Service[];
  showAll?: boolean;
}

export default function ServicesList({ services, showAll = true }: ServicesListProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {displayedServices.map((service, index) => (
        <motion.div
          key={service.id}
          className="group relative bg-dark12 rounded-lg p-6 border border-dark20 hover:border-purple55/50 transition-all duration-300 hover:transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          {/* Popular Badge */}
          {service.popular && (
            <div className="absolute -top-3 left-6">
              <span className="bg-purple55 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
          )}

          {/* Service Icon */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple55/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple55/20 transition-colors duration-300">
              <span className="text-2xl" role="img" aria-label={service.title}>
                {service.icon}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-purple55 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-grey50">
                {service.duration}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-grey70 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2 mb-6">
            {service.features.slice(0, 4).map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start text-sm text-grey70">
                <svg className="w-4 h-4 text-purple55 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
            {service.features.length > 4 && (
              <li className="text-sm text-purple55 font-medium">
                +{service.features.length - 4} more features
              </li>
            )}
          </ul>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-purple55 text-white text-sm font-medium rounded-lg hover:bg-purple55/90 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-purple55/25"
            >
              Book Now
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Hover Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple55/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      ))}
    </motion.div>
  );
} 