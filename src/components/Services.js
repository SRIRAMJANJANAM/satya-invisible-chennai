
import React, { useEffect, useState } from "react";
import {
  FaShieldAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
  FaHome,
  FaFeatherAlt,
} from "react-icons/fa";

const PHONE = "+91-9940592321";
const WHATSAPP = "919940592321";

const services = [
  {
    id: "invisible-grills",
    number: "01",
    title: "Invisible Grills",
    subtitle: "Safety Without Losing Your View",
    image: "/images/iv.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Elevate your balcony with Satya Invisible Grills, combining safety and aesthetics seamlessly. Our innovative design offers a discreet barrier while preserving your view, making it a stylish option for modern living spaces.",
    features: [
      "Minimal, modern appearance",
      "Designed for balconies and windows",
      "Helps preserve outdoor views",
    ],
    icon: <FaShieldAlt />,
  },
  {
    id: "bird-spikes",
    number: "02",
    title: "Bird Spikes",
    subtitle: "A Practical Bird-Deterrent Solution",
    image: "/images/bs.webp",
    fallback:
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=85",
    description:
      "Satya Invisible Grills also offers pigeon and bird spikes designed to discourage birds from roosting or nesting on suitable building surfaces. These practical solutions can help maintain cleaner ledges and outdoor areas.",
    features: [
      "Suitable for selected ledges and surfaces",
      "Helps discourage bird roosting",
      "A practical option for buildings",
    ],
    icon: <FaFeatherAlt />,
  },
  {
    id: "bird-protection-nets",
    number: "03",
    title: "Bird Protection Nets",
    subtitle: "Protect Your Balcony and Open Spaces",
    image: "/images/bp.webp",
    fallback:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=85",
    description:
      "Pigeons and other birds can enter open balconies, plumbing ducts, and spaces around pipes and parapets, where they may build nests. Bird protection nets help restrict access to suitable areas while keeping your space more manageable.",
    features: [
      "For balconies and suitable open areas",
      "Helps limit bird entry",
      "Useful for ducts and other openings",
    ],
    icon: <FaHome />,
  },
];

const whatsappLink = (serviceTitle) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hello Satya Invisible Grills, I would like to enquire about ${serviceTitle}. Please share the details.`
  )}`;

function SafeImage({ src, fallback, alt, className = "" }) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (imageSrc !== fallback) {
          setImageSrc(fallback);
        }
      }}
    />
  );
}

export default function Services() {
  return (
    <main className="satya-services-page">
      <style>{`
        .satya-services-page {
          --satya-navy: #071b35;
          --satya-blue: #123e70;
          --satya-gold: #d6a84f;
          --satya-light: #f4f7fb;
          --satya-text: #566579;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--satya-navy);
          background: #fff;
          overflow: hidden;
        }

        .satya-services-page *,
        .satya-services-page *::before,
        .satya-services-page *::after {
          box-sizing: border-box;
        }

        .satya-services-page a {
          text-decoration: none;
        }

        .satya-services-page .services-container {
          width: min(1160px, 92%);
          margin: 0 auto;
        }

        .satya-services-page .services-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          color: var(--satya-blue);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .satya-services-page .services-kicker::before {
          content: "";
          width: 30px;
          height: 2px;
          background: var(--satya-gold);
        }

        .satya-services-page .services-heading {
          margin: 0 0 18px;
          font-size: clamp(30px, 4.5vw, 47px);
          line-height: 1.17;
          letter-spacing: -1.1px;
          font-weight: 800;
          color: var(--satya-navy);
        }

        .satya-services-page .services-heading span {
          color: var(--satya-blue);
        }

        .satya-services-page .services-muted {
          margin: 0;
          color: var(--satya-text);
          font-size: 15px;
          line-height: 1.9;
        }

        /* Hero */
        .satya-services-page .services-hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 365px;
          padding: 75px 0;
          color: #fff;
          background:
            linear-gradient(100deg, rgba(4, 18, 38, .96), rgba(10, 44, 80, .78)),
            url("images/hero.webp")
            center/cover no-repeat;
        }

        .satya-services-page .services-hero-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
        }

        .satya-services-page .services-hero-label {
          display: inline-block;
          padding: 9px 13px;
          margin-bottom: 20px;
          border: 1px solid rgba(214,168,79,.6);
          border-radius: 3px;
          color: #f1ca7b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .satya-services-page .services-hero h1 {
          margin: 0 0 18px;
          color: #fff;
          font-size: clamp(38px, 6vw, 62px);
          line-height: 1.08;
          letter-spacing: -1.5px;
        }

        .satya-services-page .services-hero h1 span {
          color: var(--satya-gold);
        }

        .satya-services-page .services-hero p {
          max-width: 650px;
          margin: 0 0 27px;
          color: #e2eaf4;
          font-size: 15px;
          line-height: 1.9;
        }

        .satya-services-page .services-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          min-height: 46px;
          padding: 13px 19px;
          border: 0;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 800;
          transition: transform .25s ease, background .25s ease,
            box-shadow .25s ease;
        }

        .satya-services-page .services-button:hover {
          transform: translateY(-3px);
        }

        .satya-services-page .services-button-gold {
          background: var(--satya-gold);
          color: var(--satya-navy);
          box-shadow: 0 7px 20px rgba(214,168,79,.18);
        }

        .satya-services-page .services-button-gold:hover {
          background: #e9c477;
        }

        .satya-services-page .services-button-dark {
          background: var(--satya-navy);
          color: #fff;
        }

        .satya-services-page .services-button-dark:hover {
          background: var(--satya-blue);
        }

        .satya-services-page .services-button-whatsapp {
          background: #168b55;
          color: #fff;
        }

        .satya-services-page .services-button-whatsapp:hover {
          background: #107748;
        }

        /* Intro */
        .satya-services-page .services-intro {
          padding: 76px 0 30px;
          text-align: center;
        }

        .satya-services-page .services-intro-inner {
          max-width: 760px;
          margin: 0 auto;
        }

        /* Service rows */
        .satya-services-page .services-list {
          padding: 45px 0 90px;
        }

        .satya-services-page .service-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
          gap: 62px;
          padding: 40px 0;
        }

        .satya-services-page .service-row + .service-row {
          border-top: 1px solid #e8edf3;
        }

        .satya-services-page .service-row-reverse .service-image-wrap {
          order: 2;
        }

        .satya-services-page .service-row-reverse .service-copy {
          order: 1;
        }

        .satya-services-page .service-image-wrap {
          position: relative;
          min-width: 0;
          padding: 0 17px 17px 0;
        }

        .satya-services-page .service-image-wrap::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 68%;
          height: 68%;
          border-radius: 7px;
          background: var(--satya-gold);
        }

        .satya-services-page .service-image {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: 365px;
          object-fit: cover;
          object-position: center;
          border-radius: 7px;
          background: #e7edf4;
          box-shadow: 0 14px 35px rgba(7,27,53,.12);
        }

        .satya-services-page .service-number {
          position: absolute;
          z-index: 2;
          top: 20px;
          left: -15px;
          display: grid;
          place-items: center;
          width: 56px;
          height: 56px;
          border: 4px solid #fff;
          border-radius: 5px;
          color: var(--satya-navy);
          background: var(--satya-gold);
          font-size: 17px;
          font-weight: 900;
        }

        .satya-services-page .service-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          margin-bottom: 20px;
          border-radius: 6px;
          background: #f5ebd7;
          color: #9a7025;
          font-size: 21px;
        }

        .satya-services-page .service-subtitle {
          display: block;
          margin-bottom: 12px;
          color: #a47a2b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .satya-services-page .service-title {
          margin: 0 0 17px;
          color: var(--satya-navy);
          font-size: clamp(27px, 3.3vw, 37px);
          line-height: 1.2;
          letter-spacing: -.6px;
        }

        .satya-services-page .service-description {
          margin: 0;
          color: var(--satya-text);
          font-size: 14px;
          line-height: 1.95;
        }

        .satya-services-page .service-benefits {
          display: grid;
          gap: 12px;
          margin: 23px 0 27px;
          padding: 0;
          list-style: none;
        }

        .satya-services-page .service-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #24364d;
          font-size: 13px;
          line-height: 1.65;
          font-weight: 700;
        }

        .satya-services-page .service-benefits svg {
          flex: 0 0 auto;
          margin-top: 3px;
          color: #b78937;
        }

        .satya-services-page .service-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        /* Bottom banner */
        .satya-services-page .services-banner {
          padding: 65px 0;
          background:
            linear-gradient(100deg, rgba(5,22,44,.97), rgba(16,57,99,.94)),
            url("images/new.webp")
            center/cover no-repeat;
          color: #fff;
        }

        .satya-services-page .services-banner-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .satya-services-page .services-banner-copy {
          max-width: 700px;
        }

        .satya-services-page .services-banner h2 {
          margin: 0 0 13px;
          color: #fff;
          font-size: clamp(25px, 4vw, 37px);
          line-height: 1.25;
        }

        .satya-services-page .services-banner h2 span {
          color: var(--satya-gold);
        }

        .satya-services-page .services-banner p {
          margin: 0;
          color: #dce5f0;
          font-size: 14px;
          line-height: 1.8;
        }

        .satya-services-page .services-banner-actions {
          display: flex;
          flex-wrap: wrap;
          flex: 0 0 auto;
          gap: 10px;
        }

        @media (max-width: 900px) {
          .satya-services-page .service-row {
            gap: 35px;
          }

          .satya-services-page .service-image {
            height: 320px;
          }

          .satya-services-page .services-banner-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 650px) {
          .satya-services-page .services-hero {
            min-height: 330px;
            padding: 62px 0;
          }

          .satya-services-page .services-intro {
            padding: 55px 0 15px;
          }

          .satya-services-page .services-list {
            padding: 25px 0 60px;
          }

          .satya-services-page .service-row {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 34px 0;
          }

          .satya-services-page .service-row-reverse .service-image-wrap,
          .satya-services-page .service-row-reverse .service-copy {
            order: initial;
          }

          .satya-services-page .service-image {
            height: 300px;
          }

          .satya-services-page .service-copy {
            padding: 0 2px;
          }

          .satya-services-page .service-title {
            font-size: 30px;
          }

          .satya-services-page .services-banner {
            padding: 50px 0;
          }

          .satya-services-page .services-banner-actions {
            width: 100%;
          }

          .satya-services-page .services-banner-actions .services-button {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 420px) {
          .satya-services-page .services-container {
            width: 90%;
          }

          .satya-services-page .service-image {
            height: 245px;
          }

          .satya-services-page .service-actions {
            align-items: stretch;
          }

          .satya-services-page .service-actions .services-button {
            flex: 1 1 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .satya-services-page *,
          .satya-services-page *::before,
          .satya-services-page *::after {
            transition: none !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="services-hero">
        <div className="services-container services-hero-content">
          <span className="services-hero-label">Our Services</span>
          <h1>
            Safety Solutions
            <br />
            for <span>Modern Living.</span>
          </h1>
          <p>
            Discover invisible grills, bird spikes, and bird protection nets
            from Satya Invisible Grills. Thoughtful solutions for balconies,
            windows, and other suitable spaces in Chennai, Hyderabad, and
            Bangalore.
          </p>
          <a
            className="services-button services-button-gold"
            href={`tel:${PHONE}`}
          >
            <FaPhoneAlt /> Talk to Our Team
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="services-intro">
        <div className="services-container services-intro-inner">
          <span className="services-kicker">What We Offer</span>
          <h2 className="services-heading">
            The Right Solution for <span>Your Space</span>
          </h2>
          <p className="services-muted">
            From discreet balcony safety solutions to bird-control options,
            explore our services and contact us to discuss the right fit for
            your property.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="services-list">
        <div className="services-container">
          {services.map((service, index) => (
            <article
              className={`service-row ${
                index % 2 === 1 ? "service-row-reverse" : ""
              }`}
              id={service.id}
              key={service.id}
            >
              <div className="service-image-wrap">
                <SafeImage
                  src={service.image}
                  fallback={service.fallback}
                  alt={service.title}
                  className="service-image"
                />
                <span className="service-number">{service.number}</span>
              </div>

              <div className="service-copy">
                <div className="service-icon">{service.icon}</div>
                <span className="service-subtitle">{service.subtitle}</span>
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>

                <ul className="service-benefits">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FaCheckCircle />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-actions">
                  <a
                    className="services-button services-button-dark"
                    href={`tel:${PHONE}`}
                  >
                    <FaPhoneAlt /> Call Now
                  </a>

                  <a
                    className="services-button services-button-whatsapp"
                    href={whatsappLink(service.title)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="services-banner">
        <div className="services-container services-banner-inner">
          <div className="services-banner-copy">
            <h2>
              Need Help Choosing the <span>Right Service?</span>
            </h2>
            <p>
              Contact Satya Invisible Grills to discuss your requirements and
              learn more about our available solutions.
            </p>
          </div>

          <div className="services-banner-actions">
            <a
              className="services-button services-button-gold"
              href={`tel:${PHONE}`}
            >
              <FaPhoneAlt /> Call Now
            </a>
            <a
              className="services-button services-button-whatsapp"
              href={whatsappLink("your service requirements")}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
