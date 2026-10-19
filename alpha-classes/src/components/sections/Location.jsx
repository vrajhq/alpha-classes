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
                  <p className="text-sm text-gray-600">+91 99999 99999</p>
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
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Mock Map / Image Placeholder */}
            <div className="aspect-video bg-gray-200 rounded-3xl relative overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 font-medium">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-primary-600 animate-bounce" />
                  <p>Interactive Map View</p>
                  <p className="text-xs opacity-60">Vivekanand Wadi, Anand</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-500 rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};
