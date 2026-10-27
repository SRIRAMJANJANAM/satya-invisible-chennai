import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";

const PHONE = "9940592321";
const WHATSAPP = "919940592321";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the route changes.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function FloatingContactButtons() {
  return (
    <>
      <style>{`
        .satya-floating-contact {
          position: fixed;
          right: 20px;
          bottom: 24px;
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 13px;
        }

        .satya-floating-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.25);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .satya-floating-btn:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
        }

        .satya-floating-btn svg {
          display: block;
          width: 28px;
          height: 28px;
        }

        .satya-floating-whatsapp {
          background: #25d366;
        }

        .satya-floating-phone {
          background: #168cf5;
          border: 2px solid rgba(255, 255, 255, 0.9);
        }

        .satya-floating-label {
          position: absolute;
          right: 68px;
          padding: 8px 12px;
          border-radius: 7px;
          background: #031526;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transform: translateX(5px);
          transition:
            opacity 0.2s ease,
            transform 0.2s ease,
            visibility 0.2s ease;
          pointer-events: none;
        }

        .satya-floating-btn:hover .satya-floating-label,
        .satya-floating-btn:focus-visible .satya-floating-label {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        .satya-floating-btn:focus-visible {
          outline: 3px solid #d9b66d;
          outline-offset: 4px;
        }

        @media (max-width: 600px) {
          .satya-floating-contact {
            right: 13px;
            bottom: 17px;
            gap: 11px;
          }

          .satya-floating-btn {
            width: 51px;
            height: 51px;
          }

          .satya-floating-btn svg {
            width: 25px;
            height: 25px;
          }

          .satya-floating-label {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .satya-floating-btn,
          .satya-floating-label {
            transition: none;
          }
        }
      `}</style>

      <div className="satya-floating-contact">
        {/* WhatsApp button */}
        <a
          className="satya-floating-btn satya-floating-whatsapp"
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
            "Hello Satya Invisible Grills, I would like to enquire about your invisible grill services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="satya-floating-label">Chat on WhatsApp</span>

          <WhatsAppIcon />
        </a>

        {/* Phone button */}
        <a
          className="satya-floating-btn satya-floating-phone"
          href={`tel:${PHONE}`}
          aria-label="Call Satya Invisible Grills"
        >
          <span className="satya-floating-label">Call Us Now</span>

          <PhoneIcon />
        </a>
      </div>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.01 3C8.84 3 3.01 8.82 3.01 15.99c0 2.29.6 4.52 1.75 6.48L2.9 29l6.69-1.75a13 13 0 0 0 6.41 1.68h.01c7.17 0 13-5.83 13-13S23.18 3 16.01 3Zm0 23.72h-.01c-1.98 0-3.92-.53-5.61-1.53l-.4-.24-3.97 1.04 1.06-3.87-.26-.42a10.7 10.7 0 0 1-1.64-5.71c0-5.97 4.86-10.82 10.84-10.82 2.89 0 5.6 1.13 7.64 3.17a10.75 10.75 0 0 1 3.16 7.65c0 5.97-4.86 10.83-10.81 10.83Zm5.94-8.11c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.63-.52-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64 0 1.56 1.14 3.06 1.3 3.27.16.21 2.24 3.42 5.43 4.8.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />

      <FloatingContactButtons />
    </>
  );
}

export default App;