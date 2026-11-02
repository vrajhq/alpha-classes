import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
    <section className="section faq-section">
      <div className="faq-layout page-width">
        <div className="section-heading">
          <h2 className="heading-3">A few things you might be wondering.</h2>
          <p className="body-2">Everything you need to know about joining Alpha Classes.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              index={index}
              question={faq.question}
              answer={faq.answer}
            />
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
    <div className="faq-item">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question title-2"
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true" />
      </button>
      <div id={answerId} className="faq-answer" aria-hidden={!isOpen}>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="body-2">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
