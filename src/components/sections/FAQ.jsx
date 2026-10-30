import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const faqs = [
    {
      question: 'What are the batch timings?',
      answer: 'We offer flexible batch timings for different standards. Typically, we have morning batches for competitive exams and evening batches for school support. Please contact us for your specific schedule.',
    },
    {
      question: 'Do you provide study material?',
      answer: 'Yes, we provide comprehensive, simplified notes and specialized question banks for all subjects, tailored to both GSEB and CBSE boards.',
    },
    {
      question: 'Are there any scholarship tests?',
      answer: 'Yes, Alpha Classes conducts annual scholarship tests for new students based on their previous academic performance and entrance test results.',
    },
    {
      question: 'Do you offer one-on-one doubt sessions?',
      answer: 'Absolutely. We believe every student learns differently, so we provide dedicated doubt-clearing slots throughout the week.',
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'You can fill out the inquiry form on our website, or visit us directly at our center in Vivekanand Wadi, Anand.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about joining Alpha Classes.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-primary-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
