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
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-secondary-900 lg:text-5xl">What students say.</h2>
          <p className="text-gray-600">
            Join hundreds of students who have achieved their academic dreams with our guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col border-t border-gray-200 pt-6"
            >
              <div className="mb-4 flex" role="img" aria-label={`${review.rating} out of 5 stars`}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={15} className="text-primary-600 fill-primary-600" aria-hidden="true" />
                ))}
              </div>
              <p className="mb-7 flex-grow leading-relaxed text-gray-700">“{review.text}”</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-secondary-900">{review.name}</div>
                <div className="text-sm text-gray-500">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
