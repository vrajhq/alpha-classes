import React from 'react';
import { motion } from 'framer-motion';

export const Stats = () => {
  const stats = [
    { label: 'Students Taught', value: '1000+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Expert Faculty', value: '15+' },
    { label: 'Years Experience', value: '10+' },
  ];

  return (
    <section className="bg-secondary-900 py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-4 text-center md:px-8 ${index % 2 === 1 ? 'border-l border-white/20 md:border-l-0' : ''}`}
            >
              <dd className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl">{stat.value}</dd>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-100 md:text-sm">{stat.label}</dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};
