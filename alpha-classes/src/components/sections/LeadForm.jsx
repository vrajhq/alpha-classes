import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Send } from 'lucide-react';

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    standard: '',
    medium: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will call you back soon.');
    setFormData({ name: '', phone: '', standard: '', medium: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-900 rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Get a Free Call Back <br />
                <span className="text-primary-300">Start Your Journey Today</span>
              </h2>
              <p className="text-primary-100 text-lg opacity-80">
                Not sure which course is right for you? Our expert counselors are here to guide you.
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="flex items-center space-x-4 text-sm font-medium text-primary-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-400 rounded-full" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl space-y-4 text-gray-900"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Standard</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-white"
                    value={formData.standard}
                    onChange={(e) => setFormData({...formData, standard: e.target.value})}
                  >
                    <option value="">Select Standard</option>
                    <option value="9">Std 9</option>
                    <option value="10">Std 10</option>
                    <option value="11">Std 11</option>
                    <option value="12">Std 12</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Medium</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-white"
                    value={formData.medium}
                    onChange={(e) => setFormData({...formData, medium: e.target.value})}
                  >
                    <option value="">Select Medium</option>
                    <option value="english">English</option>
                    <option value="gujarati">Gujarati</option>
                  </select>
                </div>
              </div>

              <Button variant="primary" className="w-full flex items-center justify-center space-x-2 py-4">
                <span>Request Call Back</span>
                <Send size={18} />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
