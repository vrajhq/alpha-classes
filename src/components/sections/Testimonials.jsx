import React from 'react';

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
    <section className="section testimonials-section">
      <div className="testimonials-layout page-width">
        <div className="section-heading">
          <h2 className="heading-3">What students say.</h2>
          <p className="body-2">
            Join hundreds of students who have achieved their academic dreams with our guidance.
          </p>
        </div>

        <div className="testimonials-list">
          {reviews.map((review) => (
            <article key={review.name} className="testimonial">
              <div>
                <span
                  className="testimonial-rating caption-2"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {review.rating} out of 5 stars
                </span>
                <blockquote className="body-2">“{review.text}”</blockquote>
              </div>
              <div className="testimonial-credit">
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
