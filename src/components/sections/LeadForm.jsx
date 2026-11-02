import React from 'react';
import { Button } from '../ui/Button';

export const LeadForm = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-layout page-width">
        <div className="contact-copy">
          <h2 className="heading-3">
            Get a Free Call Back <br />
            <span>Start Your Journey Today</span>
          </h2>
          <p className="body-2">
            Not sure which course is right for you? Our expert counselors are here to guide you.
            Fill out the form and we'll get back to you within 24 hours.
          </p>
          <div className="contact-promises body-3">
            <span>Quick Response</span>
            <span>Expert Guidance</span>
          </div>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="lead-form"
        >
          <input type="hidden" name="access_key" value="b260dccb-7c7d-4f2e-bbdc-a61e41df3183" />
          <input type="hidden" name="subject" value="New Lead from Alpha Classes Website" />

          <div className="form-honeypot" aria-hidden="true">
            <input type="text" name="bot_field" tabIndex="-1" autoComplete="off" />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="lead-name">Full Name</label>
              <input
                id="lead-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Amit Patel"
              />
            </div>
            <div className="form-field">
              <label htmlFor="lead-phone">Phone Number</label>
              <input
                id="lead-phone"
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="lead-location">Location / City</label>
              <input
                id="lead-location"
                type="text"
                name="location"
                required
                autoComplete="address-level2"
                placeholder="e.g. Anand, Gujarat"
              />
            </div>
            <div className="form-field">
              <label htmlFor="lead-standard">Standard</label>
              <select id="lead-standard" name="standard" required defaultValue="">
                <option value="">Select Standard</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th Science">11th Science</option>
                <option value="11th Commerce">11th Commerce</option>
                <option value="12th Science">12th Science</option>
                <option value="12th Commerce">12th Commerce</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="lead-medium">Medium</label>
              <select id="lead-medium" name="medium" required defaultValue="">
                <option value="">Select Medium</option>
                <option value="english">English</option>
                <option value="gujarati">Gujarati</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="lead-school">Current School</label>
              <input
                id="lead-school"
                type="text"
                name="school"
                required
                autoComplete="organization"
                placeholder="e.g. St. Mary's School"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="lead-message">Message / More Details</label>
            <textarea
              id="lead-message"
              name="message"
              rows="2"
              placeholder="Hi, I want to enquire about coaching at Alpha Classes, Anand."
            />
          </div>

          <Button variant="primary" type="submit" className="button--submit">
            Request Call Back
          </Button>
        </form>
      </div>
    </section>
  );
};
