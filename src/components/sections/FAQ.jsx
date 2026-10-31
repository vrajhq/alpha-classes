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
    <section className="bg-[#f5f7fa] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-14">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-secondary-900 lg:text-5xl">A few things you might be wondering.</h2>
          <p className="text-gray-600">Everything you need to know about joining Alpha Classes.</p>
        </div>

        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} index={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-answer-${index}`;

  return (
    <div>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-5 py-5 text-left text-secondary-900 transition-colors hover:text-primary-700"
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <ChevronUp size={20} className="shrink-0 text-primary-600" aria-hidden="true" /> : <ChevronDown size={20} className="shrink-0 text-gray-500" aria-hidden="true" />}
      </button>
      <div id={answerId}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="max-w-2xl pb-5 pr-8 leading-relaxed text-gray-600">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
