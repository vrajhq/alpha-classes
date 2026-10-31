import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative flex min-h-[600px] h-[85vh] items-center overflow-hidden bg-secondary-900">
      <div className="absolute inset-0 z-0">
        <picture className="block h-full w-full">
          <source
            media="(max-width: 639px)"
            srcSet="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&h=1300&q=80"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="Students studying together"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-900/75 to-secondary-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            <span className="h-px w-8 bg-primary-400" aria-hidden="true" />
            <span>Admissions open · 2026–27</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-4 leading-none text-left"
          >
            <span className="text-white block">ALPHA</span>
            <span className="text-red-600 block">CLASSES</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 max-w-xl text-base font-normal leading-relaxed text-gray-200 sm:text-lg lg:text-xl"
          >
            GSEB & CBSE coaching for Std 9 to 12 — with JEE, NEET and GUJCET
            preparation under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-start"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              variant="primary"
              className="px-6 py-3 text-base bg-primary-500 hover:bg-primary-600 border-none font-bold"
            >
              Enquire now
            </Button>
            <Button
              onClick={() => scrollToSection('courses')}
              variant="outline"
              className="px-6 py-3 text-base border-2 border-white text-white hover:bg-white hover:text-secondary-900 font-bold"
            >
              View courses
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
