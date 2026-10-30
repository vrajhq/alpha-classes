import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Courses } from './components/sections/Courses';
import { Location } from './components/sections/Location';
import { LeadForm } from './components/sections/LeadForm';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-600 z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Courses />
        <Testimonials />
        <FAQ />
        <Location />
        <LeadForm />
      </main>
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        <a
          href="tel:+919825662320"
          className="p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 flex items-center justify-center"
          aria-label="Call Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
        <a
          href="https://wa.me/919825662320"
          target="_blank"
          rel="noopener noreferrer"
          className="p-0 bg-transparent text-white rounded-full shadow-2xl hover:scale-110 transition-all transform flex items-center justify-center"
          aria-label="WhatsApp Us"
        >
          <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-16 h-16" />
        </a>
      </div>
    </div>
  );
}

export default App;