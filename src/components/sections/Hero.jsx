import React from 'react';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../utils/scrollToSection';

export const Hero = () => {
  return (
    <section id="about" className="hero-section">
      <div className="hero-spread page-width">
        <div className="hero-copy">
          <p className="hero-admissions">Admissions open · 2026–27</p>
          <h1 className="heading-1 hero-heading">
            <span>ALPHA</span>
            <span>CLASSES</span>
          </h1>
          <p className="body-2 hero-description">
            GSEB &amp; CBSE coaching for Std 9 to 12 — with JEE, NEET and GUJCET
            preparation under one roof.
          </p>
          <div className="hero-actions">
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="primary"
            >
              Enquire now
            </Button>
            <Button
              onClick={() => scrollToSection('#courses')}
              variant="outline"
            >
              View courses
            </Button>
          </div>
        </div>

        <div className="hero-photo-frame">
          <picture>
            <source
              media="(max-width: 639px)"
              srcSet="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&h=1300&q=80"
            />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              alt="Students studying together"
              className="hero-photo"
              loading="eager"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
