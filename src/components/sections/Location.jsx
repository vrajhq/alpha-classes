import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Location = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Find Us in Anand</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Located in the heart of Vivekanand Wadi, we provide a serene and focused learning environment
                designed to help students reach their maximum potential.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Address</h4>
                  <p className="text-sm text-gray-600">Vivekanand Wadi, Anand,<br />Above SBI ATM, Gujarat</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Center</h4>
                  <a href="tel:+919825662320" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    +91 98256 62320
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Class Timings</h4>
                  <p className="text-sm text-gray-600">Mon - Sat: 8 AM to 8 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Exact Google Map Embed provided by user */}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4039.7382654065!2d72.95123439999999!3d22.5528375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMzJzEwLjIiTiA3MsKwNTcnMDQuNCJF!5e1!3m2!1sen!2sin!4v1792426321484!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Alpha Classes Location"
              ></iframe>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-500 rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
