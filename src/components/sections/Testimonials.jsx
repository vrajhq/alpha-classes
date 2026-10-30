import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: 'Aryan Sharma',
      role: 'IIT JEE Qualifier',
      text: 'Alpha Classes transformed the way I look at Physics. The conceptual clarity I gained here was the key to my success in JEE.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'NEET Aspirant',
      text: 'The personalized attention and the mock test series are incredible. I feel fully prepared for my exams thanks to the faculty.',
      rating: 5,
    },
    {
      name: 'Rohan Mehta',
      role: 'Std 10th Student',
      text: 'Best coaching in Anand! The teachers make complex topics easy to understand and the atmosphere is very motivating.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of students who have achieved their academic dreams with our guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-600">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
