
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";

const PHONE = "+91-9940592321";
const WHATSAPP = "919940592321";
const EMAIL = "invisiblegrill2321@gmail.com";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Invisible Grills",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "Hello Satya Invisible Grills!",
      "",
      "I would like to enquire about your services.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Location: ${form.location || "Not specified"}`,
      `Message: ${form.message || "Please contact me with more details."}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const styles = `
    .scontact {
      --sc-navy: #102d4f;
      --sc-blue: #174a78;
      --sc-gold: #c99a3b;
      --sc-ink: #203247;
      --sc-muted: #68798b;
      --sc-line: #e4eaf0;
      width: 100%;
      color: var(--sc-ink);
      font-family: inherit;
      overflow: hidden;
      background: #fff;
    }

    .scontact * {
      box-sizing: border-box;
    }

    .scontact a {
      text-decoration: none;
    }

    .scontact button,
    .scontact input,
    .scontact select,
    .scontact textarea {
      font: inherit;
    }

    .scontact .sc-container {
      width: min(1160px, calc(100% - 40px));
      margin: 0 auto;
    }

    .scontact .sc-hero {
      position: relative;
      min-height: 350px;
      display: flex;
      align-items: center;
      color: #fff;
      background:
        linear-gradient(90deg, rgba(7, 25, 46, .94), rgba(11, 39, 67, .77)),
        url("images/new.webp")
        center 45% / cover no-repeat;
    }

    .scontact .sc-hero::after {
      content: "";
      position: absolute;
      width: 180px;
      height: 4px;
      background: var(--sc-gold);
      bottom: 0;
      left: max(20px, calc((100% - 1160px) / 2));
    }

    .scontact .sc-hero-content {
      position: relative;
      z-index: 1;
      padding: 76px 0 82px;
    }

    .scontact .sc-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
      color: #f0c875;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 2.4px;
      text-transform: uppercase;
    }

    .scontact .sc-eyebrow::before {
      content: "";
      width: 30px;
      height: 2px;
      background: var(--sc-gold);
    }

    .scontact .sc-hero h1 {
      max-width: 780px;
      margin: 0;
      font-size: clamp(36px, 5.2vw, 60px);
      line-height: 1.12;
      font-weight: 800;
      letter-spacing: -1.5px;
      color: #fff;
    }

    .scontact .sc-hero h1 span {
      color: #e8bf69;
    }

    .scontact .sc-hero p {
      max-width: 620px;
      margin: 20px 0 0;
      color: #dbe5ef;
      font-size: 16px;
      line-height: 1.9;
    }

    .scontact .sc-section {
      padding: 78px 0;
    }

    .scontact .sc-heading {
      max-width: 700px;
      margin: 0 auto 42px;
      text-align: center;
    }

    .scontact .sc-heading .sc-eyebrow {
      color: var(--sc-gold);
      justify-content: center;
    }

    .scontact .sc-heading h2 {
      margin: 0;
      color: var(--sc-navy);
      font-size: clamp(28px, 3.7vw, 42px);
      line-height: 1.2;
      letter-spacing: -.8px;
    }

    .scontact .sc-heading p {
      margin: 15px 0 0;
      color: var(--sc-muted);
      line-height: 1.8;
      font-size: 15px;
    }

    .scontact .sc-contact-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
    }

    .scontact .sc-info-card {
      min-width: 0;
      padding: 27px 22px;
      border: 1px solid var(--sc-line);
      border-radius: 14px;
      background: #fff;
      box-shadow: 0 8px 28px rgba(16, 45, 79, .045);
      transition: transform .25s ease, box-shadow .25s ease,
        border-color .25s ease;
    }

    .scontact .sc-info-card:hover {
      transform: translateY(-5px);
      border-color: #d9bd7e;
      box-shadow: 0 16px 36px rgba(16, 45, 79, .09);
    }

    .scontact .sc-info-icon {
      display: grid;
      place-items: center;
      width: 50px;
      height: 50px;
      margin-bottom: 20px;
      color: var(--sc-gold);
      background: #fbf5e8;
      border-radius: 12px;
      font-size: 20px;
    }

    .scontact .sc-info-card h3 {
      margin: 0 0 10px;
      color: var(--sc-navy);
      font-size: 17px;
      font-weight: 800;
    }

    .scontact .sc-info-card p,
    .scontact .sc-info-card a {
      display: block;
      margin: 0;
      color: var(--sc-muted);
      font-size: 13px;
      line-height: 1.85;
      overflow-wrap: anywhere;
    }

    .scontact .sc-info-card a:hover {
      color: var(--sc-blue);
    }

    .scontact .sc-info-link {
      display: inline-flex !important;
      align-items: center;
      gap: 7px;
      margin-top: 14px !important;
      color: var(--sc-blue) !important;
      font-weight: 800;
    }

    .scontact .sc-main {
      background: #f5f8fb;
    }

    .scontact .sc-main-grid {
      display: grid;
      grid-template-columns: .88fr 1.12fr;
      align-items: stretch;
      gap: 30px;
    }

    .scontact .sc-intro-panel {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 100%;
      padding: 42px 34px;
      overflow: hidden;
      border-radius: 18px;
      color: #fff;
      background:
        linear-gradient(145deg, rgba(9, 30, 54, .97), rgba(23, 74, 120, .94)),
        url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80")
        center / cover;
    }

    .scontact .sc-intro-panel::after {
      content: "";
      position: absolute;
      width: 240px;
      height: 240px;
      right: -100px;
      bottom: -100px;
      border: 1px solid rgba(231, 190, 103, .35);
      border-radius: 50%;
      box-shadow: 0 0 0 24px rgba(231, 190, 103, .05),
        0 0 0 50px rgba(231, 190, 103, .04);
      pointer-events: none;
    }

    .scontact .sc-intro-panel h2 {
      margin: 0 0 18px;
      color: #fff;
      font-size: clamp(29px, 3vw, 38px);
      line-height: 1.22;
    }

    .scontact .sc-intro-panel h2 span {
      color: #e8bf69;
    }

    .scontact .sc-intro-panel > div > p {
      color: #d6e1ec;
      font-size: 14px;
      line-height: 1.9;
    }

    .scontact .sc-points {
      display: grid;
      gap: 17px;
      margin: 28px 0 32px;
      padding: 0;
      list-style: none;
    }

    .scontact .sc-points li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      color: #f1f5f9;
      font-size: 14px;
      line-height: 1.6;
    }

    .scontact .sc-points svg {
      flex-shrink: 0;
      margin-top: 3px;
      color: #e8bf69;
    }

    .scontact .sc-direct-call {
      display: flex;
      align-items: center;
      gap: 13px;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,.2);
    }

    .scontact .sc-call-icon {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 47px;
      height: 47px;
      border-radius: 50%;
      background: rgba(255,255,255,.12);
      color: #e8bf69;
      font-size: 18px;
    }

    .scontact .sc-direct-call small {
      display: block;
      margin-bottom: 4px;
      color: #c8d7e5;
      font-size: 12px;
    }

    .scontact .sc-direct-call a {
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      overflow-wrap: anywhere;
    }

    .scontact .sc-form-panel {
      padding: 38px;
      border: 1px solid #e7edf3;
      border-radius: 18px;
      background: #fff;
      box-shadow: 0 12px 35px rgba(16, 45, 79, .055);
    }

    .scontact .sc-form-panel h2 {
      margin: 0;
      color: var(--sc-navy);
      font-size: 28px;
      line-height: 1.3;
    }

    .scontact .sc-form-panel > p {
      margin: 10px 0 27px;
      color: var(--sc-muted);
      font-size: 14px;
      line-height: 1.8;
    }

    .scontact .sc-form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 19px;
    }

    .scontact .sc-field {
      min-width: 0;
    }

    .scontact .sc-field.sc-full {
      grid-column: 1 / -1;
    }

    .scontact .sc-field label {
      display: block;
      margin-bottom: 8px;
      color: #263d54;
      font-size: 13px;
      font-weight: 800;
    }

    .scontact .sc-field input,
    .scontact .sc-field select,
    .scontact .sc-field textarea {
      display: block;
      width: 100%;
      min-width: 0;
      padding: 13px 14px;
      border: 1px solid #dce5ed;
      border-radius: 9px;
      outline: none;
      color: #24384c;
      background: #fbfcfe;
      font-size: 14px;
      transition: border-color .2s ease, box-shadow .2s ease;
    }

    .scontact .sc-field input,
    .scontact .sc-field select {
      min-height: 48px;
    }

    .scontact .sc-field textarea {
      min-height: 115px;
      resize: vertical;
    }

    .scontact .sc-field input:focus,
    .scontact .sc-field select:focus,
    .scontact .sc-field textarea:focus {
      border-color: #b99142;
      box-shadow: 0 0 0 3px rgba(201, 154, 59, .13);
    }

    .scontact .sc-submit {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 11px;
      width: 100%;
      min-height: 52px;
      margin-top: 23px;
      padding: 14px 20px;
      border: 0;
      border-radius: 9px;
      color: #fff;
      background: var(--sc-navy);
      cursor: pointer;
      font-size: 14px;
      font-weight: 800;
      transition: background .2s ease, transform .2s ease;
    }

    .scontact .sc-submit:hover {
      transform: translateY(-2px);
      background: #1b527f;
    }

    .scontact .sc-form-note {
      margin: 13px 0 0;
      color: #77889a;
      font-size: 12px;
      line-height: 1.7;
      text-align: center;
    }

    .scontact .sc-bottom-cta {
      padding: 40px 0;
      color: #fff;
      background: linear-gradient(105deg, #102d4f, #194b75);
    }

    .scontact .sc-bottom-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
    }

    .scontact .sc-bottom-inner h2 {
      margin: 0;
      color: #fff;
      font-size: clamp(23px, 3vw, 32px);
      line-height: 1.3;
    }

    .scontact .sc-bottom-inner p {
      margin: 9px 0 0;
      color: #d4e0ec;
      font-size: 14px;
      line-height: 1.7;
    }

    .scontact .sc-bottom-actions {
      display: flex;
      flex-shrink: 0;
      flex-wrap: wrap;
      gap: 12px;
    }

    .scontact .sc-bottom-actions a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      min-height: 47px;
      padding: 13px 18px;
      border: 1px solid rgba(255,255,255,.3);
      border-radius: 8px;
      color: #fff;
      font-size: 13px;
      font-weight: 800;
      transition: background .2s ease, color .2s ease;
    }

    .scontact .sc-bottom-actions a:first-child {
      color: #173553;
      border-color: #e8bf69;
      background: #e8bf69;
    }

    .scontact .sc-bottom-actions a:first-child:hover {
      background: #f2d58f;
    }

    .scontact .sc-bottom-actions a:last-child:hover {
      background: rgba(255,255,255,.12);
    }

    @media (max-width: 1000px) {
      .scontact .sc-contact-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .scontact .sc-main-grid {
        grid-template-columns: 1fr;
      }

      .scontact .sc-intro-panel {
        min-height: auto;
      }
    }

    @media (max-width: 650px) {
      .scontact .sc-container {
        width: min(100% - 30px, 1160px);
      }

      .scontact .sc-hero {
        min-height: 310px;
        background-position: center;
      }

      .scontact .sc-hero-content {
        padding: 62px 0 68px;
      }

      .scontact .sc-hero h1 {
        letter-spacing: -.7px;
      }

      .scontact .sc-hero p {
        font-size: 14px;
        line-height: 1.8;
      }

      .scontact .sc-section {
        padding: 55px 0;
      }

      .scontact .sc-heading {
        margin-bottom: 30px;
      }

      .scontact .sc-contact-grid {
        grid-template-columns: 1fr;
        gap: 13px;
      }

      .scontact .sc-info-card {
        display: grid;
        grid-template-columns: 48px minmax(0, 1fr);
        align-items: start;
        column-gap: 15px;
        padding: 21px;
      }

      .scontact .sc-info-icon {
        grid-row: 1 / span 3;
        width: 46px;
        height: 46px;
        margin: 0;
      }

      .scontact .sc-info-card h3 {
        margin-top: 2px;
      }

      .scontact .sc-info-link {
        margin-top: 8px !important;
      }

      .scontact .sc-intro-panel,
      .scontact .sc-form-panel {
        padding: 28px 22px;
      }

      .scontact .sc-form-panel h2 {
        font-size: 25px;
      }

      .scontact .sc-form-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .scontact .sc-field.sc-full {
        grid-column: auto;
      }

      .scontact .sc-bottom-inner {
        align-items: flex-start;
        flex-direction: column;
      }

      .scontact .sc-bottom-actions {
        width: 100%;
      }

      .scontact .sc-bottom-actions a {
        flex: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .scontact *,
      .scontact *::before,
      .scontact *::after {
        transition-duration: .01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `;

  return (
    <div className="scontact">
      <style>{styles}</style>

      {/* HERO */}
      <section className="sc-hero">
        <div className="sc-container sc-hero-content">
          <div className="sc-eyebrow">We are here to help</div>
          <h1>
            Let's Talk About
            <br />
            <span>Your Home's Safety.</span>
          </h1>
          <p>
            Looking for invisible grills, bird spikes, or bird protection
            nets? Get in touch with Satya Invisible Grills for expert
            assistance and a free inspection enquiry.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="sc-section">
        <div className="sc-container">
          <div className="sc-heading">
            <div className="sc-eyebrow">Contact Satya</div>
            <h2>We're Just a Call Away</h2>
            <p>
              Tell us what you need. Our team will help you explore a
              suitable safety solution for your home or building.
            </p>
          </div>

          <div className="sc-contact-grid">
            <article className="sc-info-card">
              <div className="sc-info-icon">
                <FaPhoneAlt />
              </div>
              <h3>Call Our Team</h3>
              <p>Speak with us about your requirement.</p>
              <a className="sc-info-link" href={`tel:${PHONE}`}>
                {PHONE} <FaArrowRight />
              </a>
            </article>

            <article className="sc-info-card">
              <div className="sc-info-icon">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp Enquiry</h3>
              <p>Send your requirements and questions directly.</p>
              <a
                className="sc-info-link"
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hello Satya Invisible Grills! I would like to enquire about your services."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp <FaArrowRight />
              </a>
            </article>

            <article className="sc-info-card">
              <div className="sc-info-icon">
                <FaEnvelope />
              </div>
              <h3>Email Us</h3>
              <p>Send us your enquiry for more information.</p>
              <a className="sc-info-link" href={`mailto:${EMAIL}`}>
                {EMAIL} <FaArrowRight />
              </a>
            </article>

            <article className="sc-info-card">
              <div className="sc-info-icon">
                <FaClock />
              </div>
              <h3>Inspection Enquiry</h3>
              <p>Contact us to discuss an inspection for your property.</p>
              <a
                className="sc-info-link"
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hello Satya Invisible Grills! I would like to enquire about a free inspection."
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Enquire Now <FaArrowRight />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="sc-section sc-main">
        <div className="sc-container sc-main-grid">
          <div className="sc-intro-panel">
            <div>
              <div className="sc-eyebrow">Your safety matters</div>
              <h2>
                The Right Safety Solution,
                <br />
                <span>Starts Here.</span>
              </h2>
              <p>
                Make your balcony and open spaces safer without
                compromising the appearance of your home. Tell us about
                your requirement and we will help you take the next step.
              </p>

              <ul className="sc-points">
                <li>
                  <FaCheckCircle />
                  Invisible grills designed to preserve your view
                </li>
                <li>
                  <FaCheckCircle />
                  Bird spikes for suitable ledges and surfaces
                </li>
                <li>
                  <FaCheckCircle />
                  Bird protection nets for balconies and open areas
                </li>
                <li>
                  <FaCheckCircle />
                  Service enquiries for Chennai, Hyderabad and Bangalore
                </li>
              </ul>
            </div>

            <div className="sc-direct-call">
              <div className="sc-call-icon">
                <FaShieldAlt />
              </div>
              <div>
                <small>Need help right away?</small>
                <a href={`tel:${PHONE}`}>{PHONE}</a>
              </div>
            </div>
          </div>

          <div className="sc-form-panel">
            <h2>Send an Enquiry</h2>
            <p>
              Fill in your details below. Your enquiry will open in
              WhatsApp so you can review and send it to our team.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="sc-form-grid">
                <div className="sc-field">
                  <label htmlFor="sc-name">Your Name *</label>
                  <input
                    id="sc-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="sc-field">
                  <label htmlFor="sc-phone">Phone Number *</label>
                  <input
                    id="sc-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[0-9+() -]{7,20}"
                    title="Enter a valid phone number"
                    required
                  />
                </div>

                <div className="sc-field">
                  <label htmlFor="sc-service">Service Required *</label>
                  <select
                    id="sc-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="Invisible Grills">Invisible Grills</option>
                    <option value="Bird Spikes">Bird Spikes</option>
                    <option value="Bird Protection Nets">
                      Bird Protection Nets
                    </option>
                    <option value="Multiple Services">
                      Multiple Services
                    </option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div className="sc-field">
                  <label htmlFor="sc-location">Your Location</label>
                  <input
                    id="sc-location"
                    name="location"
                    type="text"
                    placeholder="City or area"
                    value={form.location}
                    onChange={handleChange}
                    autoComplete="address-level2"
                  />
                </div>

                <div className="sc-field sc-full">
                  <label htmlFor="sc-message">Your Message</label>
                  <textarea
                    id="sc-message"
                    name="message"
                    placeholder="Tell us about your balcony, windows, or other requirements..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button className="sc-submit" type="submit">
                <FaPaperPlane />
                Send Enquiry on WhatsApp
                <FaArrowRight />
              </button>

              <p className="sc-form-note">
                Your details will be included in a WhatsApp message.
                You can review it before sending.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="sc-bottom-cta">
        <div className="sc-container sc-bottom-inner">
          <div>
            <h2>Ready to Make Your Home Safer?</h2>
            <p>
              Contact Satya Invisible Grills to discuss your requirements.
            </p>
          </div>

          <div className="sc-bottom-actions">
            <a href={`tel:${PHONE}`}>
              <FaPhoneAlt />
              Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Hello Satya Invisible Grills! I would like to discuss my home safety requirements."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
