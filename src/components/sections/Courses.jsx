import React, { useEffect, useRef } from 'react';

export const Courses = () => {
  const taglineWords = useRef([]);
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

  useEffect(() => {
    const words = taglineWords.current.filter(Boolean);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      words.forEach((word) => word.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -30% 0px', threshold: 0 },
    );

    words.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="courses" className="section courses-section">
      <div className="page-width">
        <div className="section-heading">
          <h2 className="heading-3 tagline" aria-label="Coaching for every next step.">
            <span aria-hidden="true">
              {['Coaching', 'for', 'every', 'next', 'step.'].map((word, index) => (
                <React.Fragment key={word}>
                  <span
                    ref={(element) => { taglineWords.current[index] = element; }}
                    className="tagline-word"
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    {word}
                  </span>
                  {index < 4 ? ' ' : ''}
                </React.Fragment>
              ))}
            </span>
          </h2>
          <p className="body-2">
            From school foundations to entrance exam preparation, find the support that fits your goals.
          </p>
        </div>

        <div className="course-grid">
          {courseData.map((course) => (
            <article key={course.title} className="course-item">
              <div className="course-head">
                <div>
                  <h3 className="heading-5">{course.title}</h3>
                  <p className="body-3">{course.description}</p>
                </div>
                <span className="course-mark" aria-hidden="true" />
              </div>
              <ul className="course-features">
                {course.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
