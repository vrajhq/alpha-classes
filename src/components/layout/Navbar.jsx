import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { scrollToSection } from '../../utils/scrollToSection';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (event, href) => {
    event.preventDefault();
    scrollToSection(href);
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
    <nav ref={navRef} data-site-navigation className="site-nav">
      <div className="site-nav__top caption-1">
        <div className="site-nav__top-note">GSEB &amp; CBSE · Gujarati &amp; English Medium</div>
        <div className="site-nav__phones">
          <a href="tel:+919825662320">98256 62320</a>
          <a href="tel:+919979708980">99797 08980</a>
          <a
            href="https://wa.me/919825662320?text=Hi%2C%20I%20want%20to%20enquire%20about%20coaching%20at%20Alpha%20Classes%2C%20Anand."
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav__whatsapp"
            aria-label="WhatsApp Us"
          >
            <img src="/whatsapp-logo.png" alt="" />
          </a>
        </div>
      </div>

      <div className="site-nav__main page-width">
        <a href="#home" className="brand" aria-label="Alpha Classes home">
          <span>ALPHA</span>
          <span>CLASSES</span>
        </a>

        <div className="site-nav__links">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              aria-current={index === 0 ? 'page' : undefined}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="nav-toggle"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
        >
          <span className="nav-toggle__lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-nav-panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
