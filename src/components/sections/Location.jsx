import React from 'react';

export const Location = () => {
  return (
    <section id="location" className="section location-section">
      <div className="location-layout page-width">
        <div className="location-copy">
          <div className="section-heading">
            <h2 className="heading-3">A classroom close to home.</h2>
            <p className="body-2">
              Located in the heart of Vivekanand Wadi, we provide a serene and focused learning environment
              designed to help students reach their maximum potential.
            </p>
          </div>

          <dl className="location-details">
            <div className="location-detail">
              <dt>Visit us</dt>
              <dd>Vivekanand Wadi, Anand,<br />Above SBI ATM, Gujarat</dd>
            </div>
            <div className="location-detail">
              <dt>Call us</dt>
              <dd>
                <a href="tel:+919825662320">+91 98256 62320</a>
                <a href="tel:+919979708980">+91 99797 08980</a>
              </dd>
            </div>
            <div className="location-detail">
              <dt>Class timings</dt>
              <dd>Mon - Sat: 8 AM to 8 PM</dd>
            </div>
          </dl>
        </div>

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4039.7382654065!2d72.95123439999999!3d22.5528375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDMzJzEwLjIiTiA3MsKwNTcnMDQuNCJF!5e1!3m2!1sen!2sin!4v1792426321484!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Alpha Classes Location"
          />
        </div>
      </div>
    </section>
  );
};
