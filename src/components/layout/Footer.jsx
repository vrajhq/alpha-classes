import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-primary-500 font-black text-2xl">A</span>
              </div>
              <div className="text-2xl font-extrabold text-white tracking-tight">
                ALPHA<span className="text-primary-400">CLASSES</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to excellence in education, providing top-tier coaching for GSEB and CBSE standards to shape the future of students.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/alpha_classes_anand?dlrf=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-primary-400 transition-colors">Courses</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 shrink-0" />
                <span>Vivekanand Wadi, Anand,<br />Above SBI ATM, Gujarat</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400 shrink-0" />
                <span className="flex flex-col">
                  <a href="tel:+919825662320" className="hover:text-primary-400 transition-colors">+91 98256 62320</a>
                  <a href="tel:+919979708980" className="hover:text-primary-400 transition-colors">+91 99797 08980</a>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400 shrink-0" />
                <span>contact@alphaclasses.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 Alpha Classes. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};
