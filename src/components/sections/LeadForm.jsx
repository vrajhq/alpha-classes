import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Send } from 'lucide-react';

export const LeadForm = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-700 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Get a Free Call Back <br />
                <span className="text-primary-200">Start Your Journey Today</span>
              </h2>
              <p className="text-primary-100 text-base md:text-lg opacity-80">
                Not sure which course is right for you? Our expert counselors are here to guide you.
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm font-medium text-primary-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              action="https://api.web3forms.com/submit"
              method="POST"
              className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-xl space-y-3 text-gray-900"
            >
              <input type="hidden" name="access_key" value="b260dccb-7c7d-4f2e-bbdc-a61e41df3183" />
              <input type="hidden" name="subject" value="New Lead from Alpha Classes Website" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Location / City</label>
                  <input
                    type="text"
                    name="location"
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                    placeholder="e.g. Anand, Gujarat"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Standard</label>
                  <select
                    name="standard"
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select Standard</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th Science">11th Science</option>
                    <option value="11th Commerce">11th Commerce</option>
                    <option value="12th Science">12th Science</option>
                    <option value="12th Commerce">12th Commerce</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Medium</label>
                  <select
                    name="medium"
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select Medium</option>
                    <option value="english">English</option>
                    <option value="gujarati">Gujarati</option>
                  </select>
                </div>
                <div className="space-y-1">
                  {/* Empty space to keep grid balanced on desktop */}
                  <div className="hidden sm:block"></div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Message / More Details</label>
                <textarea
                  name="message"
                  rows="2"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="Hi, I want to enquire about coaching at Alpha Classes, Anand."
                ></textarea>
              </div>

              <Button variant="primary" type="submit" className="w-full flex items-center justify-center space-x-2 py-3 bg-primary-600 hover:bg-primary-700 text-sm">
                <span>Request Call Back</span>
                <Send size={16} />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
