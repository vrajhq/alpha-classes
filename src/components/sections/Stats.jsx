import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, BookOpen, Award } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { label: 'Students Taught', value: '1000+', icon: <Users className="text-primary-400" size={28} /> },
    { label: 'Success Rate', value: '98%', icon: <TrendingUp className="text-primary-400" size={28} /> },
    { label: 'Expert Faculty', value: '15+', icon: <BookOpen className="text-primary-400" size={28} /> },
    { label: 'Years Experience', value: '10+', icon: <Award className="text-primary-400" size={28} /> },
  ];

  return (
    <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 backdrop-blur-md hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <div className="p-3 rounded-2xl bg-secondary-800 border border-white/5">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
