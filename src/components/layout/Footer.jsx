import React from 'react';
import { scrollToSection } from '../../utils/scrollToSection';

export const Footer = () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'About Us', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="page-width">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <div className="brand footer-brand">
              <span>ALPHA</span>
              <span>CLASSES</span>
            </div>
            <p className="footer-description body-3">
              Dedicated to excellence in education, providing top-tier coaching for GSEB and CBSE standards to shape the future of students.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/alpha_classes_anand?dlrf=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="title-2">Quick Links</h3>
            <ul className="footer-link-list">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="title-2">Get In Touch</h3>
            <ul className="footer-contact">
              <li>Vivekanand Wadi, Anand,<br />Above SBI ATM, Gujarat</li>
              <li>
                <a href="tel:+919825662320">+91 98256 62320</a>
                <a href="tel:+919979708980">+91 99797 08980</a>
              </li>
              <li>contact.alphaclasses@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Alpha Classes. All rights reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};
