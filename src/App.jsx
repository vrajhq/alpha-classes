import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Courses } from './components/sections/Courses';
import { Location } from './components/sections/Location';
import { LeadForm } from './components/sections/LeadForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Courses />
        <Location />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
