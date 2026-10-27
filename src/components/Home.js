import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaShieldAlt,
  FaEye,
  FaGem,
  FaHome,
  FaCheckCircle,
  FaTools,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteRight,
  FaPaperPlane,
} from "react-icons/fa";

const PHONE = "9940592321";
const WHATSAPP = "919940592321";

const services = [
  {
    title: "Invisible Grills",
    description:
      "Secure your balconies, windows and open spaces with strong, elegant invisible grills that preserve your outdoor views.",
    image: "/images/iv.webp",
    fallback:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Bird Spikes",
    description:
      "Help prevent pigeons and other birds from settling on ledges and building surfaces with professionally installed bird spikes.",
    image: "/images/bs.webp",
    fallback:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Bird Protection Nets",
    description:
      "Protect balconies, utility areas and open ducts with bird protection nets designed for everyday residential use.",
    image: "/images/bp.webp",
    fallback:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
];

const slides = [
  {
    eyebrow: "Welcome to Satya Balcony Invisible Grills Chennai",
    title: "Balcony Safety",
    highlight: "Invisible Grills in Chennai",
    description:
      "Enjoy open views, fresh air and added peace of mind with premium invisible grill solutions for balconies, windows and staircases.",
    image: "/images/b1.webp",
    position: "center center",
  },
  {
    eyebrow: "Welcome to Satya Balcony Invisible Grills Chennai",
    title: "Keep Your Loved Ones",
    highlight: "Safe in Every Space",
    description:
      "Discover modern grill solutions designed to complement your home while helping improve everyday safety.",
    image: "/images/b2.webp",
    position: "center center",
  },
  {
    eyebrow: "Welcome to Satya Balcony Invisible Grills Chennai",
    title: "Enjoy Your View",
    highlight: "Without Barriers",
    description:
      "Bring together security, ventilation and a clean architectural appearance with thoughtfully designed invisible grills.",
    image:
      "images/hero.webp",
    position: "center center",
  },
];

const benefits = [
  {
    icon: <FaShieldAlt />,
    title: "Added Safety",
    description: "An additional safety barrier for your family.",
  },
  {
    icon: <FaEye />,
    title: "Open Views",
    description: "Enjoy natural light and beautiful outdoor views.",
  },
  {
    icon: <FaGem />,
    title: "Quality Materials",
    description: "Quality-focused materials and installation.",
  },
  {
    icon: <FaHome />,
    title: "Modern Design",
    description: "A neat finish for contemporary spaces.",
  },
];

const features = [
  {
    icon: <FaEye />,
    title: "Uncompromised View",
    description:
      "Enjoy city views, fresh air and natural light without the bulky appearance of traditional grills.",
    image: "/images/uc.webp",
  },
  {
    icon: <FaShieldAlt />,
    title: "Added Safety",
    description:
      "Invisible grill systems provide an additional barrier for balconies and other open spaces.",
    image: "/images/hl.webp",
  },
  {
    icon: <FaGem />,
    title: "Meticulous Design",
    description:
      "A refined, minimal appearance that complements the style of your home.",
    image: "/images/md.webp",
  },
  {
    icon: <FaTools />,
    title: "Easy Maintenance",
    description:
      "Designed for convenient everyday use with appropriate care and maintenance.",
    image:
      "https://satyainvisiblegrills.com/wp-content/uploads/2024/02/un-compromised-view-1.webp",
  },
];

const galleryImages = [
  "/images/g1.webp",
  "/images/g2.webp",
  "/images/hl.webp",
  "/images/new.webp",
  "/images/g4.webp",
  "/images/hero1.webp",
];

const testimonials = [
  {
    name: "Raju K",
    text: "Safety meets aesthetics with Satya Invisible Grills. The transparency is impressive, making our home feel secure without compromising the open feel.",
  },
  {
    name: "Ramesh",
    text: "Exceptional service and quality. The invisible grills add a modern touch to our space while helping improve safety.",
  },
  {
    name: "Manasa Raj",
    text: "The sleek design blends beautifully with our home and preserves the view. Highly recommended.",
  },
];

const css = `
  .satya-home {
    --satya-navy: #03182b;
    --satya-deep: #001224;
    --satya-blue: #168bfa;
    --satya-light: #eaf4ff;
    --satya-text: #17304e;
    --satya-muted: #60748e;
    width: 100%;
    overflow: hidden;
    color: var(--satya-text);
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    background: #fff;
    line-height: 1.65;
  }

  .satya-home *,
  .satya-home *::before,
  .satya-home *::after {
    box-sizing: border-box;
  }

  .satya-home img {
    display: block;
    max-width: 100%;
  }

  .satya-home a {
    text-decoration: none;
  }

  .satya-container {
    width: min(1380px, 91%);
    margin: 0 auto;
  }

  .satya-section {
    padding: 88px 0;
  }

  .satya-section-light {
    background: #f2f7fd;
  }

  .satya-section-dark {
    background: linear-gradient(125deg, #001224, #062747);
    color: #fff;
  }

  .satya-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: var(--satya-blue);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 15px;
  }

  .satya-eyebrow::after {
    content: "";
    width: 44px;
    height: 1px;
    background: currentColor;
  }

  .satya-section-title {
    margin: 0 0 18px;
    color: var(--satya-navy);
    font-size: clamp(29px, 3.4vw, 45px);
    line-height: 1.18;
    letter-spacing: -1.2px;
    font-weight: 800;
    overflow-wrap: anywhere;
  }

  .satya-section-title span {
    color: var(--satya-blue);
  }

  .satya-section-dark .satya-section-title {
    color: #fff;
  }

  .satya-lead {
    color: var(--satya-muted);
    max-width: 680px;
    margin: 0;
    font-size: 15px;
  }

  .satya-section-dark .satya-lead {
    color: #c4d5e9;
  }

  .satya-heading-row {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 25px;
    margin-bottom: 38px;
  }

  .satya-heading-row > div {
    max-width: 700px;
  }

  .satya-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 999px;
    padding: 13px 22px;
    font: inherit;
    font-size: 13px;
    font-weight: 750;
    cursor: pointer;
    transition: transform .25s, background .25s, box-shadow .25s;
    text-align: center;
  }

  .satya-btn:hover {
    transform: translateY(-3px);
  }

  .satya-btn-primary {
    background: var(--satya-blue);
    color: #fff;
    box-shadow: 0 8px 22px #168bfa35;
  }

  .satya-btn-primary:hover {
    background: #0877e6;
  }

  .satya-btn-outline {
    border-color: #329fff;
    background: transparent;
    color: #fff;
  }

  .satya-btn-outline:hover {
    background: #168bfa1c;
  }

  .satya-btn-whatsapp {
    background: #12a85b;
    color: #fff;
  }

  .satya-btn-whatsapp:hover {
    background: #078e49;
  }

  /* HERO CAROUSEL */

  .satya-hero {
    position: relative;
    min-height: 600px;
    height: clamp(600px, 48vw, 760px);
    max-height: 760px;
    display: flex;
    align-items: center;
    background: #001224;
    color: #fff;
    isolation: isolate;
    overflow: hidden;
  }

  .satya-hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    z-index: -2;
    animation: satya-image-in .65s ease;
    transition: opacity .3s ease;
  }

  .satya-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(
        90deg,
        rgba(0, 14, 29, .94) 0%,
        rgba(0, 20, 40, .82) 32%,
        rgba(0, 22, 42, .43) 60%,
        rgba(0, 14, 29, .10) 100%
      );
  }

  .satya-hero-content {
    width: min(1380px, 91%);
    margin: 0 auto;
    padding: 65px 0 85px;
    position: relative;
    z-index: 2;
  }

  .satya-hero-copy {
    max-width: 680px;
    animation: satya-copy-in .6s ease both;
  }

  .satya-hero .satya-eyebrow {
    color: #a5d6ff;
  }

  .satya-hero h1 {
    font-size: clamp(38px, 4.6vw, 68px);
    line-height: 1.08;
    letter-spacing: -1.8px;
    margin: 0 0 22px;
    font-weight: 850;
    color: #fff;
    overflow-wrap: anywhere;
  }

  .satya-hero h1 > span {
    display: block;
    color: #49a7ff;
    text-shadow: 0 3px 24px #00122470;
  }

  .satya-hero p {
    max-width: 560px;
    color: #f0f6ff;
    font-size: clamp(15px, 1.2vw, 18px);
    line-height: 1.8;
    margin: 0 0 30px;
    text-shadow: 0 2px 12px #00122490;
  }

  .satya-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
  }

  .satya-carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid #ffffff75;
    color: #fff;
    background: #001a2ccc;
    cursor: pointer;
    transition: background .2s, transform .2s;
    z-index: 4;
  }

  .satya-carousel-arrow:hover {
    background: var(--satya-blue);
  }

  .satya-carousel-prev {
    left: 22px;
  }

  .satya-carousel-next {
    right: 22px;
  }

  .satya-carousel-dots {
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    z-index: 4;
  }

  .satya-carousel-dots button {
    width: 10px;
    height: 10px;
    border: 0;
    padding: 0;
    border-radius: 50px;
    background: #ffffffa0;
    cursor: pointer;
    transition: width .25s, background .25s;
  }

  .satya-carousel-dots button.active {
    width: 30px;
    background: var(--satya-blue);
  }

  /* BENEFITS */

  .satya-benefits {
    background: linear-gradient(110deg, #001528, #062848);
    color: #fff;
    border-top: 1px solid #16496c;
    border-bottom: 1px solid #16496c;
  }

  .satya-benefits-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .satya-benefit {
    display: flex;
    align-items: center;
    gap: 17px;
    padding: 26px 22px;
    position: relative;
    min-width: 0;
  }

  .satya-benefit:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    height: 52%;
    top: 24%;
    width: 1px;
    background: #2078b7;
  }

  .satya-benefit-icon {
    width: 57px;
    height: 57px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border: 1.5px solid #2398ff;
    color: #54b2ff;
    border-radius: 15px;
    transform: rotate(45deg);
    font-size: 23px;
  }

  .satya-benefit-icon svg {
    transform: rotate(-45deg);
  }

  .satya-benefit h3 {
    font-size: 14px;
    color: #fff;
    margin: 0 0 4px;
  }

  .satya-benefit p {
    color: #c2d6e9;
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
  }

  /* INTRODUCTION */

  .satya-intro-grid {
    display: grid;
    grid-template-columns: .85fr 1.5fr;
    gap: 46px;
    align-items: center;
  }

  .satya-intro-copy .satya-btn {
    margin-top: 23px;
  }

  .satya-intro-gallery {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 12px;
  }

  .satya-intro-card {
    position: relative;
    height: 195px;
    overflow: hidden;
    border-radius: 9px;
    background: #d8e5f3;
  }

  .satya-intro-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .45s;
  }

  .satya-intro-card:hover img {
    transform: scale(1.07);
  }

  .satya-intro-card span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 12px 10px;
    color: #fff;
    background: linear-gradient(transparent, #00172bed);
    font-size: 12px;
    font-weight: 750;
  }

  /* SERVICES */

  .satya-service-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .satya-service-card {
    background: #fff;
    border: 1px solid #e2eaf4;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px #0a31500a;
    transition: transform .3s, box-shadow .3s;
    min-width: 0;
  }

  .satya-service-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 18px 40px #09284e16;
  }

  .satya-service-image {
    height: 245px;
    overflow: hidden;
    position: relative;
    background: #d9e6f2;
  }

  .satya-service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .45s;
  }

  .satya-service-card:hover .satya-service-image img {
    transform: scale(1.055);
  }

  .satya-service-number {
    position: absolute;
    left: 16px;
    top: 16px;
    color: #fff;
    background: #03182bdc;
    border: 1px solid #ffffff50;
    border-radius: 7px;
    padding: 5px 10px;
    font-size: 11px;
    letter-spacing: 1px;
  }

  .satya-service-body {
    padding: 23px;
  }

  .satya-service-body h3 {
    color: var(--satya-navy);
    margin: 0 0 10px;
    font-size: 21px;
  }

  .satya-service-body p {
    color: var(--satya-muted);
    margin: 0 0 22px;
    font-size: 14px;
    min-height: 92px;
  }

  .satya-service-actions {
    display: flex;
    gap: 9px;
    flex-wrap: wrap;
  }

  .satya-service-actions .satya-btn {
    flex: 1;
    padding: 11px 13px;
    font-size: 12px;
  }

  /* ABOUT */

  .satya-about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .satya-about-image-wrap {
    position: relative;
    padding: 0 20px 20px 0;
  }

  .satya-about-image {
    width: 100%;
    height: 480px;
    object-fit: cover;
    border-radius: 13px;
    position: relative;
    z-index: 1;
  }

  .satya-about-image-wrap::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 72%;
    height: 72%;
    border-radius: 13px;
    background: #168bfa;
  }

  .satya-about-tag {
    position: absolute;
    z-index: 2;
    bottom: 39px;
    left: 22px;
    padding: 17px 21px;
    border-radius: 10px;
    background: #03182bf0;
    color: #fff;
    max-width: 245px;
  }

  .satya-about-tag strong {
    display: block;
    font-size: 18px;
  }

  .satya-about-tag span {
    font-size: 12px;
    color: #c5dcf5;
  }

  .satya-check-list {
    list-style: none;
    padding: 0;
    margin: 23px 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 13px;
  }

  .satya-check-list li {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    font-size: 13px;
    font-weight: 650;
  }

  .satya-check-list svg {
    color: var(--satya-blue);
    flex-shrink: 0;
    margin-top: 4px;
  }

  /* FEATURES */

  .satya-feature-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .satya-feature-card {
    background: #fff;
    border: 1px solid #e1eaf5;
    border-radius: 12px;
    overflow: hidden;
    min-width: 0;
  }

  .satya-feature-card img {
    width: 100%;
    height: 185px;
    object-fit: cover;
    background: #dbe8f5;
  }

  .satya-feature-body {
    padding: 20px;
  }

  .satya-feature-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #e8f4ff;
    color: #168bfa;
    display: grid;
    place-items: center;
    font-size: 18px;
    margin-bottom: 14px;
  }

  .satya-feature-body h3 {
    margin: 0 0 9px;
    font-size: 16px;
    color: var(--satya-navy);
  }

  .satya-feature-body p {
    margin: 0;
    color: var(--satya-muted);
    font-size: 13px;
  }

  /* QUOTE BANNER */

  .satya-quote-banner {
    padding: 62px 0;
    background: linear-gradient(110deg, #001528, #07345a);
    color: #fff;
    position: relative;
    overflow: hidden;
  }

  .satya-quote-banner::after {
    content: "";
    position: absolute;
    width: 310px;
    height: 310px;
    border: 1px solid #ffffff18;
    border-radius: 50%;
    right: -70px;
    top: -150px;
    box-shadow: 0 0 0 35px #ffffff06, 0 0 0 70px #ffffff04;
  }

  .satya-quote-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    position: relative;
    z-index: 1;
  }

  .satya-quote-row h2 {
    margin: 0 0 9px;
    font-size: clamp(25px, 3vw, 38px);
    line-height: 1.2;
  }

  .satya-quote-row p {
    color: #c5d9ec;
    margin: 0;
    font-size: 14px;
  }

  /* GALLERY */

  .satya-gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;
  }

  .satya-gallery-item {
    border: 0;
    padding: 0;
    height: 240px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    background: #dce8f5;
  }

  .satya-gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .4s;
  }

  .satya-gallery-item:hover img {
    transform: scale(1.06);
  }

  /* TESTIMONIALS */

  .satya-testimonial-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }

  .satya-testimonial {
    padding: 28px;
    border: 1px solid #dce9f6;
    border-radius: 13px;
    background: #fff;
  }

  .satya-stars {
    display: flex;
    gap: 4px;
    color: #ffb52e;
    font-size: 13px;
    margin-bottom: 18px;
  }

  .satya-testimonial p {
    color: var(--satya-muted);
    font-size: 14px;
    margin: 0 0 22px;
  }

  .satya-review-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  .satya-review-bottom strong {
    color: var(--satya-navy);
    font-size: 14px;
  }

  .satya-review-bottom svg {
    color: #c5e3ff;
    font-size: 23px;
  }

  /* CONTACT */

  .satya-contact-grid {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 55px;
    align-items: start;
  }

  .satya-contact-info {
    display: grid;
    gap: 17px;
    margin-top: 28px;
  }

  .satya-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    min-width: 0;
  }

  .satya-contact-item > span {
    flex-shrink: 0;
    width: 43px;
    height: 43px;
    display: grid;
    place-items: center;
    background: #e5f3ff;
    color: #168bfa;
    border-radius: 10px;
    font-size: 17px;
  }

  .satya-contact-item strong {
    display: block;
    color: var(--satya-navy);
    font-size: 14px;
  }

  .satya-contact-item p,
  .satya-contact-item a {
    color: var(--satya-muted);
    font-size: 13px;
    margin: 3px 0 0;
    overflow-wrap: anywhere;
  }

  .satya-contact-form {
    background: #fff;
    border: 1px solid #e0eaf4;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 15px 45px #09284e0b;
    min-width: 0;
  }

  .satya-contact-form h3 {
    margin: 0 0 6px;
    color: var(--satya-navy);
    font-size: 23px;
  }

  .satya-contact-form > p {
    margin: 0 0 24px;
    color: var(--satya-muted);
    font-size: 13px;
  }

  .satya-form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .satya-form-field {
    display: grid;
    gap: 7px;
    min-width: 0;
  }

  .satya-form-field.full {
    grid-column: 1 / -1;
  }

  .satya-form-field label {
    font-size: 12px;
    font-weight: 750;
    color: #27415e;
  }

  .satya-form-field input,
  .satya-form-field textarea {
    width: 100%;
    min-width: 0;
    border: 1px solid #d9e4f0;
    border-radius: 8px;
    padding: 13px 14px;
    font: inherit;
    font-size: 13px;
    outline: none;
    background: #fafdff;
    color: #18314e;
  }

  .satya-form-field input:focus,
  .satya-form-field textarea:focus {
    border-color: #168bfa;
    box-shadow: 0 0 0 3px #168bfa18;
  }

  .satya-form-field textarea {
    min-height: 120px;
    resize: vertical;
  }

  .satya-contact-form .satya-btn {
    margin-top: 20px;
    border: 0;
  }

  .satya-home .satya-anchor {
    scroll-margin-top: 100px;
  }

  @keyframes satya-image-in {
    from { opacity: .55; }
    to { opacity: 1; }
  }

  @keyframes satya-copy-in {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* TABLETS */

  @media (max-width: 1100px) {
    .satya-section {
      padding: 70px 0;
    }

    .satya-intro-grid {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .satya-intro-gallery {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .satya-intro-card {
      height: 190px;
    }

    .satya-benefit {
      padding: 22px 13px;
      gap: 13px;
    }

    .satya-benefit-icon {
      width: 48px;
      height: 48px;
      font-size: 20px;
    }

    .satya-feature-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .satya-service-image {
      height: 210px;
    }

    .satya-about-grid {
      gap: 35px;
    }

    .satya-hero {
      height: 620px;
    }

    .satya-hero-content {
      width: 88%;
    }

    .satya-hero-copy {
      max-width: 620px;
    }
  }

  /* MOBILE */

  @media (max-width: 760px) {
    .satya-container,
    .satya-hero-content {
      width: 90%;
    }

    .satya-section {
      padding: 55px 0;
    }

    /*
      On mobile, reserve the upper portion for the image and
      place the text below it. This prevents the text from
      hiding most of the hero image.
    */

    .satya-hero {
      display: block;
      height: auto;
      min-height: 0;
      max-height: none;
      padding-top: 0;
      padding-bottom: 0;
      background: #001224;
    }

    .satya-hero-image {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 340px;
      object-fit: cover;
      object-position: center center;
    }

    .satya-hero::before {
      background: linear-gradient(
        180deg,
        rgba(0, 18, 36, .02) 0%,
        rgba(0, 18, 36, .08) 38%,
        rgba(0, 18, 36, .82) 65%,
        #001224 100%
      );
    }

    .satya-hero-content {
      position: relative;
      width: 90%;
      padding: 255px 0 88px;
      z-index: 2;
    }

    .satya-hero-copy {
      max-width: 600px;
    }

    .satya-hero .satya-eyebrow {
      font-size: 10px;
      letter-spacing: 2px;
      margin-bottom: 12px;
    }

    .satya-hero h1 {
      font-size: clamp(32px, 7.5vw, 46px);
      line-height: 1.12;
      letter-spacing: -.8px;
      margin-bottom: 16px;
    }

    .satya-hero p {
      font-size: 14px;
      line-height: 1.75;
      margin-bottom: 22px;
      color: #e5effb;
    }

    .satya-hero-actions {
      gap: 10px;
    }

    .satya-hero-actions .satya-btn {
      padding: 12px 17px;
      font-size: 12px;
    }

    .satya-carousel-arrow {
      width: 38px;
      height: 38px;
      top: 150px;
      transform: translateY(-50%);
      background: #001224b8;
      border-color: #ffffffaa;
    }

    .satya-carousel-prev {
      left: 12px;
    }

    .satya-carousel-next {
      right: 12px;
    }

    .satya-carousel-dots {
      bottom: 24px;
    }

    .satya-benefits-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .satya-benefit {
      padding: 20px 12px;
    }

    .satya-benefit:nth-child(2)::after {
      display: none;
    }

    .satya-benefit:nth-child(-n+2) {
      border-bottom: 1px solid #174265;
    }

    .satya-benefit p {
      font-size: 11px;
    }

    .satya-intro-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .satya-intro-card {
      height: 175px;
    }

    .satya-heading-row {
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 28px;
    }

    .satya-service-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .satya-service-image {
      height: 245px;
    }

    .satya-service-body p {
      min-height: 0;
    }

    .satya-about-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .satya-about-image {
      height: 350px;
    }

    .satya-feature-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 13px;
    }

    .satya-feature-card img {
      height: 150px;
    }

    .satya-feature-body {
      padding: 15px;
    }

    .satya-feature-body h3 {
      font-size: 15px;
    }

    .satya-feature-body p {
      font-size: 12px;
    }

    .satya-quote-row {
      align-items: flex-start;
      flex-direction: column;
    }

    .satya-gallery-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
    }

    .satya-gallery-item {
      height: 175px;
    }

    .satya-testimonial-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .satya-contact-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .satya-contact-form {
      padding: 22px;
    }
  }

  /* SMALL MOBILE PHONES */

  @media (max-width: 420px) {
    .satya-hero-image {
      height: 290px;
    }

    .satya-hero-content {
      padding-top: 225px;
      padding-bottom: 78px;
    }

    .satya-hero h1 {
      font-size: clamp(29px, 8vw, 36px);
      letter-spacing: -.6px;
    }

    .satya-hero p {
      font-size: 13px;
    }

    .satya-hero-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .satya-hero-actions .satya-btn {
      width: 100%;
    }

    .satya-carousel-arrow {
      top: 130px;
      width: 36px;
      height: 36px;
    }

    .satya-benefit {
      gap: 10px;
      padding: 16px 7px;
    }

    .satya-benefit-icon {
      width: 40px;
      height: 40px;
      font-size: 17px;
      border-radius: 10px;
    }

    .satya-benefit h3 {
      font-size: 12px;
    }

    .satya-benefit p {
      font-size: 10px;
    }

    .satya-intro-card {
      height: 145px;
    }

    .satya-intro-card span {
      font-size: 11px;
    }

    .satya-feature-grid {
      grid-template-columns: 1fr;
    }

    .satya-feature-card img {
      height: 190px;
    }

    .satya-check-list {
      grid-template-columns: 1fr;
    }

    .satya-service-actions .satya-btn {
      font-size: 11px;
      padding: 11px 9px;
    }

    .satya-gallery-item {
      height: 140px;
    }

    .satya-form-grid {
      grid-template-columns: 1fr;
    }

    .satya-form-field.full {
      grid-column: auto;
    }

    .satya-contact-form .satya-btn {
      width: 100%;
      font-size: 12px;
      padding: 12px 14px;
    }
  }

  @media (max-width: 340px) {
    .satya-hero-content {
      width: 88%;
    }

    .satya-hero h1 {
      font-size: 28px;
    }

    .satya-benefit-icon {
      display: none;
    }

    .satya-service-actions {
      flex-direction: column;
    }

    .satya-gallery-grid {
      grid-template-columns: 1fr;
    }

    .satya-gallery-item {
      height: 200px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .satya-home *,
    .satya-home *::before,
    .satya-home *::after {
      animation-duration: .01ms !important;
      transition-duration: .01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

function SafeImage({ src, fallback, alt, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
      {...props}
    />
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeImage === null) return undefined;

    const handleKey = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImage(
          (current) =>
            current === null ? null : (current + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (current) =>
            current === null
              ? null
              : (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [activeImage]);

  const slide = slides[activeSlide];

  const changeSlide = (direction) => {
    setActiveSlide(
      (current) => (current + direction + slides.length) % slides.length
    );
  };

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Satya Invisible Grills, I would like to request a free quote.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      `Requirements: ${form.message}`,
    ].join("\n");

    openWhatsApp(message);
  };

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <div className="satya-home">
      <style>{css}</style>

      {/* HERO CAROUSEL */}
      <section className="satya-hero" aria-label="Featured services">
        <SafeImage
          key={slide.image}
          className="satya-hero-image"
          src={slide.image}
          fallback="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern home with a spacious balcony"
          fetchPriority="high"
          loading="eager"
          style={{ objectPosition: slide.position }}
        />

        <div className="satya-hero-content">
          <div className="satya-hero-copy" key={activeSlide}>
            <div className="satya-eyebrow">{slide.eyebrow}</div>

            <h1>
              {slide.title}
              <span>{slide.highlight}</span>
            </h1>

            <p>{slide.description}</p>

            <div className="satya-hero-actions">
              <a className="satya-btn satya-btn-primary" href="#home-services">
                Explore Our Services <FaArrowRight />
              </a>

              <a
                className="satya-btn satya-btn-outline"
                href={`tel:+${PHONE}`}
              >
                <FaPhoneAlt /> Contact Us
              </a>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="satya-carousel-arrow satya-carousel-prev"
          onClick={() => changeSlide(-1)}
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>

        <button
          type="button"
          className="satya-carousel-arrow satya-carousel-next"
          onClick={() => changeSlide(1)}
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        <div className="satya-carousel-dots" aria-label="Choose carousel slide">
          {slides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              className={index === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="satya-benefits" aria-label="Our advantages">
        <div className="satya-container satya-benefits-grid">
          {benefits.map((benefit) => (
            <div className="satya-benefit" key={benefit.title}>
              <div className="satya-benefit-icon">{benefit.icon}</div>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="satya-section satya-section-light">
        <div className="satya-container satya-intro-grid">
          <div className="satya-intro-copy">
            <div className="satya-eyebrow">WHAT WE DO</div>

            <h2 className="satya-section-title">
              Invisible Grills for
              <br />
              <span>Homes, Offices & More</span>
            </h2>

            <p className="satya-lead">
              We provide invisible grill solutions for balconies, windows,
              staircases and more. Our products are designed to help keep your
              space safe, open and elegant.
            </p>

            <a className="satya-btn satya-btn-primary" href="#home-about">
              Know More About Us <FaArrowRight />
            </a>
          </div>

          <div className="satya-intro-gallery">
            {[
              { title: "Balcony Grills", image: "/images/bc.webp" },
              { title: "Window Grills", image: "/images/new.webp" },
              { title: "Safety", image: "/images/new1.webp" },
              { title: "Modern Spaces", image: "/images/ms.webp" },
            ].map((item) => (
              <div className="satya-intro-card" key={item.title}>
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fallback="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=650&q=85"
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="satya-section satya-anchor" id="home-services">
        <div className="satya-container">
          <div className="satya-heading-row">
            <div>
              <div className="satya-eyebrow">OUR SERVICES</div>

              <h2 className="satya-section-title">
                Smart Protection.
                <br />
                <span>Beautiful Living.</span>
              </h2>

              <p className="satya-lead">
                Explore practical protection solutions for homes, apartments
                and other suitable spaces.
              </p>
            </div>

            <a className="satya-btn satya-btn-primary" href="#home-contact">
              Get a Free Quote <FaArrowRight />
            </a>
          </div>

          <div className="satya-service-grid">
            {services.map((service, index) => (
              <article className="satya-service-card" key={service.title}>
                <div className="satya-service-image">
                  <SafeImage
                    src={service.image}
                    fallback={service.fallback}
                    alt={service.title}
                  />

                  <span className="satya-service-number">
                    SERVICE 0{index + 1}
                  </span>
                </div>

                <div className="satya-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="satya-service-actions">
                    <a
                      className="satya-btn satya-btn-primary"
                      href={`tel:+${PHONE}`}
                    >
                      <FaPhoneAlt /> Call Now
                    </a>

                    <button
                      type="button"
                      className="satya-btn satya-btn-whatsapp"
                      onClick={() =>
                        openWhatsApp(
                          `Hello Satya Invisible Grills, I would like to enquire about ${service.title}. Please share the details.`
                        )
                      }
                    >
                      <FaWhatsapp /> WhatsApp
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        className="satya-section satya-section-light satya-anchor"
        id="home-about"
      >
        <div className="satya-container satya-about-grid">
          <div className="satya-about-image-wrap">
            <SafeImage
              className="satya-about-image"
              src="/images/about.webp"
              fallback="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
              alt="Modern home and balcony design"
            />

            <div className="satya-about-tag">
              <strong>Satya Invisible Grills</strong>
              <span>Safety, style and unobstructed views</span>
            </div>
          </div>

          <div>
            <div className="satya-eyebrow">ABOUT US</div>

            <h2 className="satya-section-title">
              Safety That Blends
              <br />
              <span>Beautifully With Your Home</span>
            </h2>

            <p className="satya-lead">
              Satya Invisible Grills offers modern safety grill solutions for
              homes and other suitable spaces in Chennai, Hyderabad and
              Bengaluru. Our range includes invisible grills, stainless steel
              balcony grills, window grills and rooftop solutions.
            </p>

            <p className="satya-lead" style={{ marginTop: 16 }}>
              Balcony safety is especially important for families with children
              and pets. Our goal is to help you add an extra layer of protection
              without sacrificing the open look and feel of your home.
            </p>

            <ul className="satya-check-list">
              {[
                "Modern, minimal appearance",
                "Solutions for balconies and windows",
                "Free inspection enquiry",
                "Installation and maintenance support",
              ].map((item) => (
                <li key={item}>
                  <FaCheckCircle /> {item}
                </li>
              ))}
            </ul>

            <a
              className="satya-btn satya-btn-primary"
              href="#home-contact"
              style={{ marginTop: 26 }}
            >
              Talk to Our Team <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="satya-section">
        <div className="satya-container">
          <div className="satya-heading-row">
            <div>
              <div className="satya-eyebrow">THE SATYA ADVANTAGE</div>

              <h2 className="satya-section-title">
                Made for Modern
                <br />
                <span>Everyday Living</span>
              </h2>

              <p className="satya-lead">
                Discover the features that make invisible grill solutions a
                practical choice for contemporary spaces.
              </p>
            </div>
          </div>

          <div className="satya-feature-grid">
            {features.map((feature) => (
              <article className="satya-feature-card" key={feature.title}>
                <SafeImage
                  src={feature.image}
                  fallback="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85"
                  alt={feature.title}
                />

                <div className="satya-feature-body">
                  <div className="satya-feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="satya-quote-banner">
        <div className="satya-container satya-quote-row">
          <div>
            <h2>
              Make Your Space Safer.
              <br />
              Keep Your View Beautiful.
            </h2>

            <p>
              Contact Satya Invisible Grills to discuss your requirements.
            </p>
          </div>

          <div className="satya-hero-actions">
            <a className="satya-btn satya-btn-primary" href={`tel:+${PHONE}`}>
              <FaPhoneAlt /> +91 {PHONE}
            </a>

            <button
              className="satya-btn satya-btn-outline"
              type="button"
              onClick={() =>
                openWhatsApp(
                  "Hello Satya Invisible Grills, I would like a free quote for invisible grills."
                )
              }
            >
              <FaWhatsapp /> WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="satya-section satya-section-light">
        <div className="satya-container">
          <div className="satya-heading-row">
            <div>
              <div className="satya-eyebrow">OUR WORKS</div>

              <h2 className="satya-section-title">
                Quality You Can
                <span> See</span>
              </h2>

              <p className="satya-lead">
                Browse examples of invisible grill installations and related
                protection solutions.
              </p>
            </div>

            <a className="satya-btn satya-btn-primary" href="#home-contact">
              Enquire Today <FaArrowRight />
            </a>
          </div>

          <div className="satya-gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                className="satya-gallery-item"
                type="button"
                key={image}
                onClick={() => setActiveImage(index)}
                aria-label={`View gallery image ${index + 1}`}
              >
                <SafeImage
                  src={image}
                  fallback={`https://images.unsplash.com/photo-${
                    [
                      "1600210492486-724fe5c67fb0",
                      "1600607687939-ce8a6c25118c",
                      "1600566753086-00f18fb6b3ea",
                    ][index % 3]
                  }?auto=format&fit=crop&w=800&q=85`}
                  alt={`Satya Invisible Grills project ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {activeImage !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setActiveImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            background: "rgba(0, 10, 22, .94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close image preview"
            style={{
              position: "absolute",
              top: 20,
              right: 24,
              color: "#fff",
              background: "transparent",
              border: 0,
              fontSize: 34,
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Previous gallery image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveImage(
                (activeImage - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            style={{
              color: "#fff",
              background: "#ffffff18",
              border: 0,
              borderRadius: "50%",
              width: 44,
              height: 44,
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <FaChevronLeft />
          </button>

          <SafeImage
            src={galleryImages[activeImage]}
            fallback="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt={`Gallery preview ${activeImage + 1}`}
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: "82%",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: 8,
              margin: "0 15px",
            }}
          />

          <button
            type="button"
            aria-label="Next gallery image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveImage((activeImage + 1) % galleryImages.length);
            }}
            style={{
              color: "#fff",
              background: "#ffffff18",
              border: 0,
              borderRadius: "50%",
              width: 44,
              height: 44,
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {/* TESTIMONIALS */}
      <section className="satya-section">
        <div className="satya-container">
          <div className="satya-heading-row">
            <div>
              <div className="satya-eyebrow">CUSTOMER EXPERIENCES</div>

              <h2 className="satya-section-title">
                Safety With a
                <span> Stylish Finish</span>
              </h2>

              <p className="satya-lead">
                Customer feedback can help you understand the experience of
                choosing invisible grill solutions.
              </p>
            </div>
          </div>

          <div className="satya-testimonial-grid">
            {testimonials.map((review) => (
              <article className="satya-testimonial" key={review.name}>
                <div className="satya-stars" aria-label="5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p>“{review.text}”</p>

                <div className="satya-review-bottom">
                  <strong>{review.name}</strong>
                  <FaQuoteRight />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="satya-section satya-section-light satya-anchor"
        id="home-contact"
      >
        <div className="satya-container satya-contact-grid">
          <div>
            <div className="satya-eyebrow">GET IN TOUCH</div>

            <h2 className="satya-section-title">
              Let's Discuss Your
              <span> Requirements</span>
            </h2>

            <p className="satya-lead">
              Looking for invisible grills, bird spikes or bird protection
              nets? Contact our team to discuss your space and request a quote.
            </p>

            <div className="satya-contact-info">
              <div className="satya-contact-item">
                <span><FaPhoneAlt /></span>
                <div>
                  <strong>Call Us</strong>
                  <a href={`tel:+${PHONE}`}>+91 {PHONE}</a>
                </div>
              </div>

              <div className="satya-contact-item">
                <span><FaWhatsapp /></span>
                <div>
                  <strong>WhatsApp Enquiries</strong>
                  <a
                    href={`https://wa.me/${WHATSAPP}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat with our team
                  </a>
                </div>
              </div>

              <div className="satya-contact-item">
                <span><FaEnvelope /></span>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:invisiblegrill2321@gmail.com">
                    invisiblegrill2321@gmail.com
                  </a>
                </div>
              </div>

              <div className="satya-contact-item">
                <span><FaMapMarkerAlt /></span>
                <div>
                  <strong>Our Address</strong>
                  <p>
                    2/24, Puliyur 2nd Main Road, Trustpuram,
                    Kodambakkam, Chennai – 600024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="satya-contact-form" onSubmit={handleSubmit}>
            <h3>Request a Free Quote</h3>

            <p>
              Fill in your details and continue the enquiry through WhatsApp.
            </p>

            <div className="satya-form-grid">
              <div className="satya-form-field">
                <label htmlFor="satya-name">Your Name *</label>
                <input
                  id="satya-name"
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="satya-form-field">
                <label htmlFor="satya-phone">Phone Number *</label>
                <input
                  id="satya-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateForm}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  pattern="[0-9+() -]{8,18}"
                  required
                />
              </div>

              <div className="satya-form-field full">
                <label htmlFor="satya-email">Email Address</label>
                <input
                  id="satya-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateForm}
                  placeholder="Enter your email (optional)"
                  autoComplete="email"
                />
              </div>

              <div className="satya-form-field full">
                <label htmlFor="satya-message">Your Requirements *</label>
                <textarea
                  id="satya-message"
                  name="message"
                  value={form.message}
                  onChange={updateForm}
                  placeholder="Tell us about your balcony, windows or other requirements..."
                  required
                />
              </div>
            </div>

            <button className="satya-btn satya-btn-primary" type="submit">
              Send Enquiry on WhatsApp <FaPaperPlane />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}