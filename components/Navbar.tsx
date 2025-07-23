'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-dark03/90 backdrop-blur-md border-b border-dark20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple55 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">FF</span>
              </div>
              <span className="font-semibold text-base sm:text-lg text-white hidden sm:block">
                FlickzWithFitz
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-grey70 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple55 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4">

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-grey70 hover:text-white hover:bg-dark20 focus:outline-none focus:ring-2 focus:ring-purple55 transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="w-6 h-6 relative">
                  <span
                    className={clsx(
                      'absolute h-0.5 w-6 bg-current transform transition-all duration-300',
                      isMobileMenuOpen ? 'top-3 rotate-45' : 'top-1'
                    )}
                  />
                  <span
                    className={clsx(
                      'absolute top-3 h-0.5 w-6 bg-current transform transition-all duration-300',
                      isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    )}
                  />
                  <span
                    className={clsx(
                      'absolute h-0.5 w-6 bg-current transform transition-all duration-300',
                      isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={closeMobileMenu}
            navLinks={navLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
} 