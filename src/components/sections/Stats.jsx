import React from 'react';
import { motion } from 'framer-motion';

export const Stats = () => {
  const stats = [
    { label: 'Students Taught', value: '1000+', icon: '🎓' },
    { label: 'Success Rate', value: '98%', icon: '📈' },
    { label: 'Expert Faculty', value: '15+', icon: '👨‍🏫' },
    { label: 'Years Experience', value: '10+', icon: '🏆' },
  ];

  return (
    <section className="py-16 bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
