import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
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
        <div className="flex items-center space-x-4">
          <a href="tel:+919825662320" className="flex items-center space-x-1 hover:text-primary-400 transition-colors">
            <Phone size={12} /> <span>98256 62320</span>
          </a>
          <a href="tel:+919979708980" className="flex items-center space-x-1 hover:text-primary-400 transition-colors">
            <Phone size={12} /> <span>99797 08980</span>
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
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-500 font-semibold transition-colors"
              >
                {link.name}
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
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-primary-500"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
