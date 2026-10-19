import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { BookOpen, Microscope, Calculator, Trophy } from 'lucide-react';

export const Courses = () => {
  const courseData = [
    {
      title: 'Std 9 & 10',
      description: 'Foundation years focus',
      features: ['All Main Subjects', 'Conceptual Clarity', 'Regular Tests', 'Personalized Attention'],
      icon: <BookOpen className="text-primary-600" size={24} />,
    },
    {
      title: 'Std 11 & 12',
      description: 'Specialized Stream Coaching',
      features: ['Science Stream', 'Commerce Stream', 'Deep Dive Theory', 'Practical Application'],
      icon: <Microscope className="text-primary-600" size={24} />,
    },
    {
      title: 'Competitive Exams',
      description: 'Targeting Top Ranks',
      features: ['JEE Main & Advanced', 'NEET Preparation', 'GUJCET Focus', 'Mock Test Series'],
      icon: <Trophy className="text-primary-600" size={24} />,
    },
    {
      title: 'Learning Mediums',
      description: 'Comfort in your language',
      features: ['English Medium', 'Gujarati Medium', 'Bilingual Support', 'Simplified Notes'],
      icon: <Calculator className="text-primary-600" size={24} />,
    },
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored educational programs designed to meet the needs of every student, from basic foundation to advanced competitive goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseData.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card title={course.title} description={course.description}>
                <div className="mb-6 p-3 bg-primary-50 w-fit rounded-xl">
                  {course.icon}
                </div>
                <ul className="space-y-3">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
