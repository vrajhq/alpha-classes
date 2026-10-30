import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { GraduationCap } from 'lucide-react';

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
    <section className="relative h-[85vh] min-h-[500px] sm:min-h-[600px] flex items-center overflow-hidden bg-secondary-900">
      {/* Background Image with exact Overlay */}
      <div className="absolute inset-0 z-0">
        <picture className="block h-full w-full">
          <source
            media="(max-width: 639px)"
            srcSet="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&h=1300&fit=crop&crop=faces&auto=format"
          />
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
            alt="Students studying together"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-secondary-900/70 backdrop-brightness-75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-primary-500 text-white px-3 py-1 rounded-full text-[10px] font-bold mb-6 shadow-lg uppercase tracking-wider"
          >
            <GraduationCap size={12} />
            <span>Admissions open 2026–27</span>
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
            className="text-base sm:text-lg lg:text-xl text-gray-200 mb-10 font-normal leading-relaxed text-left max-w-xl"
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
