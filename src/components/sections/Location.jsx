import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Location = () => {
  return (
    <section id="about" className="overflow-hidden bg-[#f5f7fa] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 lg:text-5xl">A classroom close to home.</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Located in the heart of Vivekanand Wadi, we provide a serene and focused learning environment
                designed to help students reach their maximum potential.
              </p>
            </div>

            <dl className="divide-y divide-gray-200 border-y border-gray-200">
              <div className="flex items-start gap-4 py-4">
                <MapPin size={18} className="mt-1 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-secondary-900">Visit us</dt>
                  <dd className="text-sm leading-relaxed text-gray-600">Vivekanand Wadi, Anand,<br />Above SBI ATM, Gujarat</dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <Phone size={18} className="mt-1 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-secondary-900">Call us</dt>
                  <dd className="flex flex-wrap gap-x-4 text-sm">
                    <a href="tel:+919825662320" className="text-gray-600 transition-colors hover:text-primary-600">+91 98256 62320</a>
                    <a href="tel:+919979708980" className="text-gray-600 transition-colors hover:text-primary-600">+91 99797 08980</a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4">
                <Clock size={18} className="mt-1 shrink-0 text-primary-600" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-secondary-900">Class timings</dt>
                  <dd className="text-sm text-gray-600">Mon - Sat: 8 AM to 8 PM</dd>
                </div>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video overflow-hidden border border-gray-200 bg-white">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
