import React from "react";
import { Link } from "react-router-dom";

const PHONE = "9940592321";
const EMAIL = "invisiblegrill2321@gmail.com";

const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/pW9EYEZGy84xgYJg9";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5258.1104139603185!2d80.22017031174335!3d13.057970112923577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526794ba8700fb%3A0x3dd0f82374f7b49a!2sSatya%20Invisible%20Grills%20for%20Balcony%20Chennai!5e1!3m2!1sen!2sin!4v1793086072430!5m2!1sen!2sin";

const services = [
  "Invisible Grills",
  "Bird Spikes",
  "Bird Protection Nets",
];

const seoKeywords = [
  "Invisible Grills in Chennai",
  "Balcony Invisible Grills in Chennai",
  "Invisible Grill Installation Chennai",
  "Balcony Safety Grills Chennai",
  "Invisible Grills Price in Chennai",
  "Best Invisible Grill Dealers in Chennai",
  "Stainless Steel Invisible Grills Chennai",
  "Invisible Grill Installation Near Me",
  "Apartment Balcony Invisible Grills Chennai",
  "Invisible Safety Grills for Balconies Chennai",
  "Invisible Grills for High-Rise Buildings Chennai",
  "Balcony Protection Grills Chennai",
  "Invisible Grill Contractors in Chennai",
  "Bird Safety Invisible Grills Chennai",
  "Affordable Invisible Grills in Chennai",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .satya-footer,
        .satya-footer * {
          box-sizing: border-box;
        }

        .satya-footer {
          --footer-bg: #031526;
          --footer-panel: #061e34;
          --footer-blue: #168cf5;
          --footer-light: #48b5ff;
          --footer-text: #d1dfef;
          --footer-muted: #91a8bf;

          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          color: var(--footer-text);
          background: var(--footer-bg);
          font-family: Arial, Helvetica, sans-serif;
          border-top: 1px solid rgba(45, 147, 255, 0.38);
        }

        .satya-footer a {
          color: inherit;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .satya-footer-main {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 52px clamp(18px, 5%, 64px) 40px;
          display: grid;
          grid-template-columns:
            minmax(0, 1.3fr)
            minmax(0, 0.8fr)
            minmax(0, 0.95fr)
            minmax(0, 1.15fr);
          gap: clamp(22px, 3vw, 42px);
        }

        .satya-footer-brand,
        .satya-footer-main > div {
          min-width: 0;
        }

        .satya-footer-logo {
          display: inline-flex;
          align-items: center;
          max-width: 100%;
          margin: 0 0 20px;
          line-height: 0;
        }

        .satya-footer-logo img {
          display: block;
          width: 240px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          filter: brightness(1.18) contrast(1.05);
        }

        .satya-footer-description {
          margin: 0 0 22px;
          color: var(--footer-text);
          font-size: 14px;
          line-height: 1.85;
          overflow-wrap: anywhere;
        }

        .satya-footer-heading {
          position: relative;
          margin: 4px 0 24px;
          padding: 0 0 13px;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
        }

        .satya-footer-heading::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 46px;
          height: 3px;
          border-radius: 5px;
          background: var(--footer-blue);
        }

        .satya-footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .satya-footer-links li {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        .satya-footer-links a {
          display: inline-flex;
          align-items: flex-start;
          gap: 9px;
          color: var(--footer-text);
          font-size: 14px;
          line-height: 1.65;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .satya-footer-links a:hover {
          color: var(--footer-light);
          transform: translateX(3px);
        }

        .satya-footer-arrow {
          flex-shrink: 0;
          color: var(--footer-blue);
          font-size: 18px;
          line-height: 1.3;
        }

        .satya-footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 21px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .satya-footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-width: 0;
        }

        .satya-footer-contact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          border: 1px solid rgba(72, 181, 255, 0.28);
          border-radius: 10px;
          background: var(--footer-panel);
          color: var(--footer-light);
        }

        .satya-footer-contact-icon svg {
          display: block;
          width: 19px;
          height: 19px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .satya-footer-contact-copy {
          flex: 1;
          min-width: 0;
          padding-top: 1px;
        }

        .satya-footer-contact-copy strong {
          display: block;
          margin-bottom: 6px;
          color: #fff;
          font-size: 14px;
          line-height: 1.5;
        }

        .satya-footer-contact-copy a {
          display: block;
          color: var(--footer-text);
          font-size: 13px;
          line-height: 1.8;
          transition: color 0.2s ease;
        }

        .satya-footer-contact-copy a:hover {
          color: var(--footer-light);
        }

        .satya-footer-map-link {
          display: inline-flex !important;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          color: var(--footer-light) !important;
          font-weight: 700;
        }

        .satya-footer-tagline {
          margin-top: 22px;
          color: var(--footer-light);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* Responsive embedded map */
        .satya-footer-map-section {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(18px, 5%, 64px) 42px;
        }

        .satya-footer-map-heading {
          margin: 0 0 9px;
          color: #fff;
          font-size: clamp(20px, 2.5vw, 25px);
          line-height: 1.35;
        }

        .satya-footer-map-description {
          margin: 0 0 18px;
          color: var(--footer-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .satya-footer-map-frame {
          position: relative;
          width: 100%;
          height: clamp(240px, 32vw, 380px);
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(72, 181, 255, 0.3);
          border-radius: 14px;
          background: var(--footer-panel);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        .satya-footer-map-frame iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .satya-footer-map-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          max-width: 100%;
          margin-top: 15px;
          padding: 12px 18px;
          border: 1px solid var(--footer-blue);
          border-radius: 8px;
          background: var(--footer-blue);
          color: #fff !important;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.5;
          text-align: center;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .satya-footer-map-button:hover {
          background: #0875d1;
          transform: translateY(-2px);
        }

        .satya-footer-map-button svg {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* SEO section */
        .satya-footer-seo {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 clamp(18px, 5%, 64px) 36px;
        }

        .satya-footer-seo h3 {
          margin: 0 0 12px;
          color: #fff;
          font-size: 17px;
          line-height: 1.5;
        }

        .satya-footer-seo p {
          margin: 0 0 16px;
          color: var(--footer-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .satya-footer-keywords {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .satya-footer-keywords li {
          max-width: 100%;
        }

        .satya-footer-keywords a {
          display: inline-flex;
          max-width: 100%;
          padding: 7px 10px;
          border: 1px solid rgba(72, 181, 255, 0.2);
          border-radius: 6px;
          background: var(--footer-panel);
          color: var(--footer-text);
          font-size: 12px;
          line-height: 1.5;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .satya-footer-keywords a:hover {
          color: var(--footer-light);
          border-color: var(--footer-blue);
        }

        .satya-footer-bottom {
          border-top: 1px solid rgba(117, 165, 211, 0.18);
          background: #021120;
        }

        .satya-footer-bottom-inner {
          width: 100%;
          max-width: 1440px;
          min-height: 72px;
          margin: 0 auto;
          padding: 18px clamp(18px, 5%, 64px);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .satya-footer-copyright {
          margin: 0;
          color: var(--footer-muted);
          font-size: 12px;
          line-height: 1.8;
        }

        /* Laptop and tablet */
        @media (max-width: 1100px) {
          .satya-footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 38px 30px;
            padding-top: 45px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .satya-footer-main {
            grid-template-columns: minmax(0, 1fr);
            gap: 32px;
            padding: 35px 20px 30px;
          }

          .satya-footer-logo img {
            width: 230px;
          }

          .satya-footer-heading {
            margin-bottom: 19px;
            font-size: 18px;
          }

          .satya-footer-links {
            gap: 11px;
          }

          .satya-footer-contact-list {
            gap: 19px;
          }

          .satya-footer-map-section {
            padding: 0 20px 30px;
          }

          .satya-footer-map-description {
            font-size: 13px;
          }

          .satya-footer-map-frame {
            height: 270px;
            border-radius: 10px;
          }

          .satya-footer-map-button {
            width: 100%;
            padding: 13px 15px;
          }

          .satya-footer-seo {
            padding: 0 20px 28px;
          }

          .satya-footer-seo h3 {
            font-size: 16px;
          }

          .satya-footer-keywords {
            gap: 7px;
          }

          .satya-footer-keywords a {
            font-size: 11px;
            padding: 6px 8px;
          }

          .satya-footer-bottom-inner {
            min-height: auto;
            padding: 20px;
          }
        }

        /* Small phones */
        @media (max-width: 360px) {
          .satya-footer-main {
            padding-right: 15px;
            padding-left: 15px;
          }

          .satya-footer-map-section,
          .satya-footer-seo {
            padding-right: 15px;
            padding-left: 15px;
          }

          .satya-footer-contact-item {
            gap: 9px;
          }

          .satya-footer-contact-icon {
            width: 34px;
            height: 34px;
            flex-basis: 34px;
          }

          .satya-footer-map-frame {
            height: 230px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .satya-footer *,
          .satya-footer *::before,
          .satya-footer *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <footer className="satya-footer">
        <div className="satya-footer-main">
          {/* Company information */}
          <div className="satya-footer-brand">
            <Link
              to="/"
              className="satya-footer-logo"
              aria-label="Satya Invisible Grills home"
            >
              <img
                src={`${process.env.PUBLIC_URL || ""}/logo.png`}
                alt="Satya Invisible Grills"
                loading="lazy"
              />
            </Link>

            <p className="satya-footer-description">
              Satya Invisible Grills provides solutions for balconies,
              windows and other suitable spaces, combining safety with
              open views and modern design.
            </p>

            <p className="satya-footer-tagline">
              Safe · Stylish · Durable
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="satya-footer-heading">Quick Links</h3>

            <ul className="satya-footer-links">
              <li>
                <Link to="/">
                  <span className="satya-footer-arrow">›</span>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about-us">
                  <span className="satya-footer-arrow">›</span>
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <span className="satya-footer-arrow">›</span>
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact-us">
                  <span className="satya-footer-arrow">›</span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="satya-footer-heading">Our Services</h3>

            <ul className="satya-footer-links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    <span className="satya-footer-arrow">›</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="satya-footer-heading">Contact Us</h3>

            <ul className="satya-footer-contact-list">
              <li className="satya-footer-contact-item">
                <span className="satya-footer-contact-icon">
                  <LocationIcon />
                </span>

                <div className="satya-footer-contact-copy">
                  <strong>Our Address</strong>

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open business location in Google Maps"
                  >
                    2/24, Puliyur 2nd Main Road,
                    <br />
                    Trustpuram, Kodambakkam,
                    <br />
                    Chennai - 600024
                  </a>

                  <a
                    className="satya-footer-map-link"
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ↗ Get Directions
                  </a>
                </div>
              </li>

              <li className="satya-footer-contact-item">
                <span className="satya-footer-contact-icon">
                  <PhoneIcon />
                </span>

                <div className="satya-footer-contact-copy">
                  <strong>Contact Us</strong>
                  <a href={`tel:${PHONE}`}>{PHONE}</a>
                </div>
              </li>

              <li className="satya-footer-contact-item">
                <span className="satya-footer-contact-icon">
                  <MailIcon />
                </span>

                <div className="satya-footer-contact-copy">
                  <strong>Email Us</strong>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsive Google Map */}
        <section
          className="satya-footer-map-section"
          aria-labelledby="satya-footer-map-heading"
        >
          <h2
            className="satya-footer-map-heading"
            id="satya-footer-map-heading"
          >
            Find Us on Google Maps
          </h2>

          <p className="satya-footer-map-description">
            Visit Satya Invisible Grills in Kodambakkam, Chennai.
            View the map below or open Google Maps for directions.
          </p>

          <div className="satya-footer-map-frame">
            <iframe
              src={MAP_EMBED_URL}
              title="Satya Invisible Grills location in Chennai on Google Maps"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <a
            className="satya-footer-map-button"
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LocationIcon />
            Open in Google Maps ↗
          </a>
        </section>

        {/* Chennai SEO keywords */}
        <section
          className="satya-footer-seo"
          aria-labelledby="satya-footer-seo-title"
        >
          <h3 id="satya-footer-seo-title">
            Invisible Grill Services in Chennai
          </h3>

          <p>
            Satya Invisible Grills provides invisible grill solutions
            for balconies, apartments and high-rise buildings in Chennai.
            Contact us to discuss installation options, safety requirements
            and pricing for your space.
          </p>

          <ul className="satya-footer-keywords">
            {seoKeywords.map((keyword) => (
              <li key={keyword}>
                <Link to="/services">{keyword}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Copyright */}
        <div className="satya-footer-bottom">
          <div className="satya-footer-bottom-inner">
            <p className="satya-footer-copyright">
              © {year} Satya Invisible Grills. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}