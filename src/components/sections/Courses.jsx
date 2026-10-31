import React from 'react';
import { motion } from 'framer-motion';

export const Courses = () => {
  const courseData = [
    {
      title: 'Std 9 & 10',
      description: 'Build strong foundations across core subjects.',
      features: ['All Main Subjects', 'Conceptual Clarity', 'Regular Tests', 'Personalized Attention'],
    },
    {
      title: 'Std 11 & 12',
      description: 'Focused support for senior secondary studies.',
      features: ['Science Stream', 'Commerce Stream', 'Deep Dive Theory', 'Practical Application'],
    },
    {
      title: 'Competitive Exams',
      description: 'Structured preparation for entrance exams.',
      features: ['JEE Main & Advanced', 'NEET Preparation', 'GUJCET Focus', 'Mock Test Series'],
    },
    {
      title: 'Learning Mediums',
      description: 'Learn in the language that works for you.',
      features: ['English Medium', 'Gujarati Medium', 'Bilingual Support', 'Simplified Notes'],
    },
  ];

  return (
    <section id="courses" className="bg-[#f5f7fa] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-secondary-900 lg:text-5xl">Coaching for every next step.</h2>
          <p className="text-gray-600 leading-relaxed">
            From school foundations to entrance exam preparation, find the support that fits your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {courseData.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t-2 border-primary-500 bg-white px-6 py-7 md:px-8 md:py-9"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <h3 className="mb-2 text-xl font-bold text-secondary-900 md:text-2xl">{course.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{course.description}</p>
                </div>
                <span className="font-mono text-sm text-primary-600" aria-hidden="true">0{index + 1}</span>
              </div>
              <ul className="grid grid-cols-1 gap-x-4 gap-y-3 border-t border-gray-100 pt-5 sm:grid-cols-2">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-baseline gap-2 text-sm text-gray-700">
                    <span className="text-primary-600" aria-hidden="true">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
