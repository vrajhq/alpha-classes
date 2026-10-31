import React, { useEffect, useRef, useState } from 'react';
import { Phone, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 100; // account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth',
        });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className="fixed z-50 w-full border-b border-gray-200 bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-secondary-900 px-4 py-2 text-xs font-medium text-white sm:px-8">
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-black tracking-[-0.06em] md:text-3xl">
              <span className="text-secondary-900">ALPHA</span>
              <span className="text-primary-600"> CLASSES</span>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="border-b border-transparent py-2 text-sm font-semibold text-gray-600 transition-colors hover:border-primary-600 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-12 w-12 place-content-center gap-[6px] rounded-[17px] border border-white/20 bg-secondary-900 text-white shadow-lg shadow-secondary-900/20 transition-transform active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-900"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <span aria-hidden="true" className="grid gap-[6px]">
                  <span className="h-[3px] w-6 rounded-full bg-white" />
                  <span className="h-[3px] w-6 rounded-full bg-white" />
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute right-4 top-full z-[60] mt-2 w-56 overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-2xl shadow-secondary-900/20 backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-1 p-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
