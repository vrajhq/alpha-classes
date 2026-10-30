import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-secondary-900 text-white py-2 text-xs font-medium px-4 sm:px-8 flex justify-between items-center">
        <div className="hidden sm:block">GSEB & CBSE · Gujarati & English Medium</div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <a href="tel:+919825662320" className="flex items-center space-x-1 hover:text-primary-400 transition-colors">
            <Phone size={12} /> <span className="truncate">98256 62320</span>
          </a>
          <a href="tel:+919979708980" className="flex items-center space-x-1 hover:text-primary-400 transition-colors">
            <Phone size={12} /> <span className="truncate">99797 08980</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-2xl font-black tracking-tighter">
              <span className="text-secondary-900">ALPHA </span>
              <span className="text-primary-500">CLASSES</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 font-semibold transition-all duration-300 rounded-full hover:bg-primary-50 relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full bg-primary-100/50" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div className="text-xl font-black tracking-tighter">
                <span className="text-secondary-900">ALPHA </span>
                <span className="text-primary-500">CLASSES</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-6 py-4 text-lg font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-2xl transition-all duration-200 active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="p-6 bg-gray-50/50 border-t border-gray-100">
               <p className="text-center text-xs text-gray-400 font-medium">© 2026 Alpha Classes</p>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};
