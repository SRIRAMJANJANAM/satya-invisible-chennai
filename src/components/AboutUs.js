
import React from "react";
import {
  FaShieldAlt,
  FaEye,
  FaCheckCircle,
  FaTools,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaAward,
  FaHome,
  FaUsers,
  FaQuoteLeft,
} from "react-icons/fa";

const PHONE = "+91-9940592321";
const WHATSAPP = "919940592321";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hello Satya Invisible Grills, I would like to know more about your invisible grill services."
)}`;

const IMAGE = {
  about: "/images/about-us.webp",
  invisibleGrills: "/images/hero.webp",
  view: "/images/un-compromised-view.webp",
  safety: "/images/hard-line-safety.webp",
  design: "/images/meticulous-design.webp",
  maintenance: "/images/easy-maintenance.webp",
};

const features = [
  {
    icon: <FaEye />,
    title: "Uncompromised Views",
    description:
      "Enjoy natural light, fresh air, and beautiful outdoor views while adding a layer of safety to your balcony.",
    image: IMAGE.view,
    fallback:
      "images/hero.webp",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safety First",
    description:
      "Our invisible grill solutions are designed to help create a safer environment for families, children, and pets.",
    image: IMAGE.safety,
    fallback:
      "images/new.webp",
  },
  {
    icon: <FaAward />,
    title: "Meticulous Design",
    description:
      "A clean, modern appearance that complements contemporary homes without making balconies feel enclosed.",
    image: IMAGE.design,
    fallback:
      "images/bs.webp",
  },
  {
    icon: <FaTools />,
    title: "Easy Maintenance",
    description:
      "Quality materials and a practical design help make routine care easier and keep your installation looking neat.",
    image: IMAGE.maintenance,
    fallback:
      "images/hl.webp",
  },
];

const highlights = [
  {
    icon: <FaShieldAlt />,
    title: "Safety-Focused Solutions",
    text: "Designed to add a safety barrier while preserving an open feel.",
  },
  {
    icon: <FaHome />,
    title: "Made for Modern Homes",
    text: "Suitable for balconies, windows, and other residential spaces.",
  },
  {
    icon: <FaUsers />,
    title: "Customer-Focused Service",
    text: "Support from enquiry through installation and maintenance.",
  },
];

function SafeImage({ src, fallback, alt, className = "" }) {
  const [imageSrc, setImageSrc] = React.useState(src);

  React.useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (imageSrc !== fallback) setImageSrc(fallback);
      }}
    />
  );
}

export default function AboutUs() {
  return (
    <main className="satya-about">
      <style>{`
        .satya-about {
          --satya-navy: #071b35;
          --satya-blue: #123e70;
          --satya-gold: #d6a84f;
          --satya-light: #f4f7fb;
          --satya-text: #536174;
          --satya-white: #ffffff;
          color: var(--satya-navy);
          background: #fff;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .satya-about * {
          box-sizing: border-box;
        }

        .satya-about a {
          text-decoration: none;
        }

        .satya-about .satya-container {
          width: min(1160px, 92%);
          margin: 0 auto;
        }

        .satya-about .satya-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--satya-blue);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .satya-about .satya-kicker::before {
          content: "";
          width: 30px;
          height: 2px;
          background: var(--satya-gold);
        }

        .satya-about .satya-section-title {
          margin: 0 0 20px;
          font-size: clamp(29px, 4vw, 43px);
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -1px;
          color: var(--satya-navy);
        }

        .satya-about .satya-section-title span {
          color: var(--satya-blue);
        }

        .satya-about .satya-muted {
          color: var(--satya-text);
          font-size: 15px;
          line-height: 1.9;
          margin: 0;
        }

        .satya-about .satya-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          min-height: 48px;
          padding: 13px 22px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 800;
          transition: transform .25s ease, background .25s ease,
            box-shadow .25s ease;
        }

        .satya-about .satya-btn:hover {
          transform: translateY(-3px);
        }

        .satya-about .satya-btn-primary {
          background: var(--satya-gold);
          color: var(--satya-navy);
          box-shadow: 0 8px 22px rgba(214, 168, 79, .2);
        }

        .satya-about .satya-btn-primary:hover {
          background: #e8bd69;
        }

        .satya-about .satya-btn-outline {
          border: 1px solid rgba(255,255,255,.4);
          color: #fff;
          background: rgba(255,255,255,.06);
        }

        /* Page hero */
        .satya-about .satya-about-hero {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 360px;
          padding: 82px 0;
          color: #fff;
          background:
            linear-gradient(90deg, rgba(4, 20, 41, .96), rgba(8, 35, 67, .79)),
            url("images/hero.webp")
            center/cover no-repeat;
        }

        .satya-about .satya-about-hero::after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border: 1px solid rgba(214,168,79,.35);
          border-radius: 50%;
          right: 9%;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .satya-about .satya-hero-inner {
          position: relative;
          z-index: 1;
        }

        .satya-about .satya-hero-label {
          display: inline-block;
          padding: 9px 14px;
          margin-bottom: 18px;
          border: 1px solid rgba(214,168,79,.5);
          border-radius: 3px;
          color: #f1ca7b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .satya-about .satya-about-hero h1 {
          max-width: 750px;
          margin: 0 0 18px;
          font-size: clamp(38px, 6vw, 61px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 800;
          color: #fff;
        }

        .satya-about .satya-about-hero h1 span {
          color: var(--satya-gold);
        }

        .satya-about .satya-about-hero p {
          max-width: 620px;
          margin: 0 0 27px;
          color: #e2eaf4;
          font-size: 16px;
          line-height: 1.8;
        }

        .satya-about .satya-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* Intro */
        .satya-about .satya-intro {
          padding: 92px 0;
        }

        .satya-about .satya-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 65px;
        }

        .satya-about .satya-image-wrap {
          position: relative;
          min-width: 0;
          padding: 0 20px 20px 0;
        }

        .satya-about .satya-image-wrap::before {
          content: "";
          position: absolute;
          z-index: 0;
          right: 0;
          bottom: 0;
          width: 76%;
          height: 75%;
          border-radius: 8px;
          background: var(--satya-gold);
        }

        .satya-about .satya-main-image {
          position: relative;
          z-index: 1;
          display: block;
          width: 100%;
          height: 470px;
          object-fit: cover;
          object-position: center;
          border-radius: 7px;
          box-shadow: 0 18px 45px rgba(7,27,53,.15);
          background: #e7edf4;
        }

        .satya-about .satya-image-badge {
          position: absolute;
          z-index: 2;
          left: -18px;
          bottom: 42px;
          max-width: 225px;
          padding: 20px;
          border-radius: 5px;
          color: #fff;
          background: var(--satya-navy);
          box-shadow: 0 12px 30px rgba(7,27,53,.2);
        }

        .satya-about .satya-image-badge svg {
          color: var(--satya-gold);
          font-size: 24px;
          margin-bottom: 9px;
        }

        .satya-about .satya-image-badge strong {
          display: block;
          margin-bottom: 6px;
          font-size: 15px;
        }

        .satya-about .satya-image-badge span {
          display: block;
          color: #cbd6e5;
          font-size: 12px;
          line-height: 1.6;
        }

        .satya-about .satya-intro-copy > p {
          margin: 0 0 15px;
        }

        .satya-about .satya-check-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 13px 18px;
          margin: 26px 0 30px;
          padding: 0;
          list-style: none;
        }

        .satya-about .satya-check-list li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: var(--satya-navy);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.6;
        }

        .satya-about .satya-check-list svg {
          flex: 0 0 auto;
          margin-top: 3px;
          color: #bd8c31;
        }

        .satya-about .satya-inline-phone {
          color: var(--satya-blue);
          font-weight: 800;
        }

        /* Highlight strip */
        .satya-about .satya-highlight-strip {
          padding: 36px 0;
          background: var(--satya-navy);
        }

        .satya-about .satya-highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .satya-about .satya-highlight {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 8px 4px;
        }

        .satya-about .satya-highlight-icon {
          display: grid;
          place-items: center;
          flex: 0 0 48px;
          width: 48px;
          height: 48px;
          border-radius: 6px;
          background: rgba(214,168,79,.13);
          color: var(--satya-gold);
          font-size: 20px;
        }

        .satya-about .satya-highlight h3 {
          margin: 2px 0 8px;
          color: #fff;
          font-size: 16px;
        }

        .satya-about .satya-highlight p {
          margin: 0;
          color: #cbd6e5;
          font-size: 13px;
          line-height: 1.7;
        }

        /* Features */
        .satya-about .satya-features {
          padding: 92px 0;
          background: var(--satya-light);
        }

        .satya-about .satya-section-heading {
          max-width: 720px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .satya-about .satya-section-heading .satya-kicker {
          justify-content: center;
        }

        .satya-about .satya-section-heading > p {
          margin: 0;
          color: var(--satya-text);
          font-size: 15px;
          line-height: 1.8;
        }

        .satya-about .satya-feature-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .satya-about .satya-feature-card {
          overflow: hidden;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0 8px 28px rgba(7,27,53,.06);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .satya-about .satya-feature-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 38px rgba(7,27,53,.12);
        }

        .satya-about .satya-feature-image {
          display: block;
          width: 100%;
          height: 185px;
          object-fit: cover;
          background: #e5ebf2;
        }

        .satya-about .satya-feature-content {
          position: relative;
          padding: 25px 20px 24px;
        }

        .satya-about .satya-feature-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          margin-top: -48px;
          margin-bottom: 18px;
          position: relative;
          border: 4px solid #fff;
          border-radius: 6px;
          background: var(--satya-gold);
          color: var(--satya-navy);
          font-size: 17px;
        }

        .satya-about .satya-feature-content h3 {
          margin: 0 0 12px;
          color: var(--satya-navy);
          font-size: 17px;
          line-height: 1.4;
        }

        .satya-about .satya-feature-content p {
          margin: 0;
          color: var(--satya-text);
          font-size: 13px;
          line-height: 1.8;
        }

        /* Services */
        .satya-about .satya-services {
          padding: 90px 0;
        }

        .satya-about .satya-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
        }

        .satya-about .satya-service-photo {
          width: 100%;
          height: 390px;
          object-fit: cover;
          border-radius: 8px;
          background: #e5ebf2;
        }

        .satya-about .satya-service-list {
          display: grid;
          gap: 22px;
          margin-top: 28px;
        }

        .satya-about .satya-service-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .satya-about .satya-service-item > span {
          display: grid;
          place-items: center;
          flex: 0 0 43px;
          width: 43px;
          height: 43px;
          border-radius: 5px;
          background: #f5ebd7;
          color: #9a7025;
          font-size: 17px;
        }

        .satya-about .satya-service-item h3 {
          margin: 0 0 6px;
          font-size: 16px;
          color: var(--satya-navy);
        }

        .satya-about .satya-service-item p {
          margin: 0;
          color: var(--satya-text);
          font-size: 13px;
          line-height: 1.75;
        }

        /* Quote banner */
        .satya-about .satya-quote-section {
          padding: 72px 0;
          color: #fff;
          background:
            linear-gradient(110deg, rgba(5,22,44,.97), rgba(16,57,99,.93)),
            url("images/uc.webp")
            center/cover no-repeat;
        }

        .satya-about .satya-quote-inner {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: start;
          gap: 25px;
          max-width: 880px;
          margin: 0 auto;
        }

        .satya-about .satya-quote-icon {
          color: var(--satya-gold);
          font-size: 36px;
        }

        .satya-about .satya-quote-inner h2 {
          margin: 0 0 14px;
          font-size: clamp(25px, 4vw, 36px);
          line-height: 1.25;
          color: #fff;
        }

        .satya-about .satya-quote-inner p {
          margin: 0;
          color: #dce5f0;
          font-size: 15px;
          line-height: 1.85;
        }

        /* CTA */
        .satya-about .satya-cta {
          padding: 66px 0;
          background: #f5f7fa;
        }

        .satya-about .satya-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding: 36px 40px;
          border-radius: 9px;
          background: #fff;
          box-shadow: 0 12px 35px rgba(7,27,53,.07);
          border-left: 4px solid var(--satya-gold);
        }

        .satya-about .satya-cta-copy h2 {
          margin: 0 0 10px;
          font-size: clamp(23px, 3vw, 32px);
          line-height: 1.25;
          color: var(--satya-navy);
        }

        .satya-about .satya-cta-copy p {
          margin: 0;
          color: var(--satya-text);
          font-size: 14px;
          line-height: 1.7;
        }

        .satya-about .satya-cta-actions {
          display: flex;
          flex-wrap: wrap;
          flex: 0 0 auto;
          gap: 10px;
        }

        .satya-about .satya-btn-call {
          color: #fff;
          background: var(--satya-navy);
        }

        .satya-about .satya-btn-whatsapp {
          color: #fff;
          background: #168b55;
        }

        .satya-about .satya-btn-call:hover {
          background: var(--satya-blue);
        }

        .satya-about .satya-btn-whatsapp:hover {
          background: #107748;
        }

        @media (max-width: 1000px) {
          .satya-about .satya-intro-grid,
          .satya-about .satya-services-grid {
            gap: 36px;
          }

          .satya-about .satya-feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .satya-about .satya-main-image {
            height: 430px;
          }

          .satya-about .satya-cta-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 700px) {
          .satya-about .satya-about-hero {
            min-height: 330px;
            padding: 65px 0;
          }

          .satya-about .satya-about-hero::after {
            width: 150px;
            height: 150px;
            right: -65px;
            top: auto;
            bottom: 15px;
            transform: none;
          }

          .satya-about .satya-about-hero p {
            font-size: 14px;
          }

          .satya-about .satya-intro,
          .satya-about .satya-features,
          .satya-about .satya-services {
            padding: 65px 0;
          }

          .satya-about .satya-intro-grid,
          .satya-about .satya-services-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .satya-about .satya-intro-copy {
            order: -1;
          }

          .satya-about .satya-main-image {
            height: 350px;
          }

          .satya-about .satya-image-badge {
            left: 10px;
            bottom: 35px;
          }

          .satya-about .satya-highlight-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .satya-about .satya-feature-grid {
            gap: 15px;
          }

          .satya-about .satya-feature-image {
            height: 150px;
          }

          .satya-about .satya-feature-content {
            padding: 22px 15px 20px;
          }

          .satya-about .satya-feature-content h3 {
            font-size: 15px;
          }

          .satya-about .satya-feature-content p {
            font-size: 12px;
          }

          .satya-about .satya-service-photo {
            height: 300px;
          }

          .satya-about .satya-quote-section {
            padding: 55px 0;
          }

          .satya-about .satya-quote-inner {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .satya-about .satya-cta {
            padding: 45px 0;
          }

          .satya-about .satya-cta-inner {
            padding: 27px 22px;
          }

          .satya-about .satya-cta-actions {
            width: 100%;
          }

          .satya-about .satya-cta-actions .satya-btn {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 420px) {
          .satya-about .satya-container {
            width: 90%;
          }

          .satya-about .satya-check-list {
            grid-template-columns: 1fr;
          }

          .satya-about .satya-feature-grid {
            grid-template-columns: 1fr;
          }

          .satya-about .satya-feature-image {
            height: 200px;
          }

          .satya-about .satya-feature-content p {
            font-size: 13px;
          }

          .satya-about .satya-btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .satya-about *,
          .satya-about *::before,
          .satya-about *::after {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="satya-about-hero">
        <div className="satya-container satya-hero-inner">
          <span className="satya-hero-label">About Satya Invisible Grills</span>
          <h1>
            Safety That Blends
            <br />
            With <span>Your View.</span>
          </h1>
          <p>
            Modern invisible grill solutions for homes that value safety,
            elegance, natural light, and an open view. Serving customers in
            Chennai, Hyderabad, and Bangalore.
          </p>
          <div className="satya-hero-actions">
            <a className="satya-btn satya-btn-primary" href={`tel:${PHONE}`}>
              <FaPhoneAlt /> Contact Us
            </a>
            <a
              className="satya-btn satya-btn-outline"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section className="satya-intro">
        <div className="satya-container satya-intro-grid">
          <div className="satya-image-wrap">
            <SafeImage
              src={IMAGE.about}
              fallback="images/about.webp"
              alt="Modern home balcony and residential design"
              className="satya-main-image"
            />
            <div className="satya-image-badge">
              <FaShieldAlt />
              <strong>Safety Meets Style</strong>
              <span>Thoughtful grill solutions for modern living.</span>
            </div>
          </div>

          <div className="satya-intro-copy">
            <span className="satya-kicker">Who We Are</span>
            <h2 className="satya-section-title">
              A Safer Home,
              <br />
              <span>Without Losing the View</span>
            </h2>
            <p className="satya-muted">
              Satya Invisible Grills provides modern safety grill solutions
              designed to complement the look of your home. We focus on
              practical installations that help maintain an open balcony feel
              while adding an extra layer of protection.
            </p>
            <p className="satya-muted" style={{ marginTop: 14 }}>
              Our offerings include invisible grills for balconies and windows,
              stainless-steel grill solutions, bird spikes, and bird protection
              nets. We serve customers in Chennai, Hyderabad, and Bangalore,
              with a focus on quality workmanship and customer support.
            </p>

            <ul className="satya-check-list">
              <li>
                <FaCheckCircle /> Balcony Safety Solutions
              </li>
              <li>
                <FaCheckCircle /> Modern, Minimal Appearance
              </li>
              <li>
                <FaCheckCircle /> Bird Protection Solutions
              </li>
              <li>
                <FaCheckCircle /> Enquiry and Service Support
              </li>
            </ul>

            <p className="satya-muted" style={{ marginBottom: 22 }}>
              Want to discuss your requirements? Call us at{" "}
              <a className="satya-inline-phone" href={`tel:${PHONE}`}>
                {PHONE}
              </a>
              .
            </p>

            <a className="satya-btn satya-btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              Get a Free Quote <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* COMPANY HIGHLIGHTS */}
      <section className="satya-highlight-strip">
        <div className="satya-container satya-highlight-grid">
          {highlights.map((item) => (
            <div className="satya-highlight" key={item.title}>
              <div className="satya-highlight-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="satya-features">
        <div className="satya-container">
          <div className="satya-section-heading">
            <span className="satya-kicker">What Matters to Us</span>
            <h2 className="satya-section-title">
              Designed Around <span>Your Needs</span>
            </h2>
            <p>
              We combine practical safety considerations with a neat,
              contemporary finish to help your home remain bright, open, and
              comfortable.
            </p>
          </div>

          <div className="satya-feature-grid">
            {features.map((feature) => (
              <article className="satya-feature-card" key={feature.title}>
                <SafeImage
                  src={feature.image}
                  fallback={feature.fallback}
                  alt={feature.title}
                  className="satya-feature-image"
                />
                <div className="satya-feature-content">
                  <div className="satya-feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="satya-services">
        <div className="satya-container satya-services-grid">
          <div>
            <span className="satya-kicker">Our Solutions</span>
            <h2 className="satya-section-title">
              Complete Solutions for <span>Your Space</span>
            </h2>
            <p className="satya-muted">
              Every property has different requirements. Tell us about your
              balcony, windows, or bird-protection needs so we can discuss a
              suitable solution for your space.
            </p>

            <div className="satya-service-list">
              <div className="satya-service-item">
                <span>
                  <FaShieldAlt />
                </span>
                <div>
                  <h3>Invisible Grills</h3>
                  <p>
                    A discreet grill option for balconies and windows that
                    helps preserve your view and the open appearance of your
                    home.
                  </p>
                </div>
              </div>

              <div className="satya-service-item">
                <span>
                  <FaHome />
                </span>
                <div>
                  <h3>Bird Spikes</h3>
                  <p>
                    Practical bird-deterrent solutions for suitable ledges and
                    surfaces around residential and commercial buildings.
                  </p>
                </div>
              </div>

              <div className="satya-service-item">
                <span>
                  <FaTools />
                </span>
                <div>
                  <h3>Bird Protection Nets</h3>
                  <p>
                    Netting solutions designed to help restrict birds from
                    entering balconies, ducts, and other open areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <SafeImage
            src={IMAGE.invisibleGrills}
            fallback="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85"
            alt="Modern residential space with balcony"
            className="satya-service-photo"
          />
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="satya-quote-section">
        <div className="satya-container">
          <div className="satya-quote-inner">
            <FaQuoteLeft className="satya-quote-icon" />
            <div>
              <h2>
                Let the View Stay Open.
                <br />
                Let Safety Come First.
              </h2>
              <p>
                We believe safety solutions should complement your home, not
                overpower it. Satya Invisible Grills helps you explore options
                that balance a clean appearance with your property's safety
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="satya-cta">
        <div className="satya-container">
          <div className="satya-cta-inner">
            <div className="satya-cta-copy">
              <h2>Looking for Invisible Grills?</h2>
              <p>
                Talk to our team about your requirements in Chennai, Hyderabad,
                or Bangalore.
              </p>
            </div>
            <div className="satya-cta-actions">
              <a className="satya-btn satya-btn-call" href={`tel:${PHONE}`}>
                <FaPhoneAlt /> Call Now
              </a>
              <a
                className="satya-btn satya-btn-whatsapp"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
