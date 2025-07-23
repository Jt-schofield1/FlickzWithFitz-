'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <motion.div
        className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-black border-r border-dark20 z-50 md:hidden"
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        exit={{ x: -320 }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center p-4 border-b border-dark20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple55 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CF</span>
              </div>
              <span className="font-semibold text-lg text-white">
                Cameron Fitzsimmons
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block px-4 py-3 text-lg font-medium text-grey70 hover:text-white hover:bg-dark20 rounded-lg transition-all duration-200 border border-transparent hover:border-dark30"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          {/* CTA Section */}
          <div className="p-4 border-t border-dark20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full btn-primary text-center purple-glow-hover"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
} 