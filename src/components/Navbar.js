import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const PHONE = "+91-9940592321";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Invisible Grills", path: "/services" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <style>{`
        html {
          margin: 0 !important;
          padding: 0 !important;
          width: 100%;
          scroll-behavior: smooth;
        }

        body {
          margin: 0 !important;
          padding: 0 !important;
          width: 100%;
          min-width: 320px;
        }

        #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100%;
          min-height: 100vh;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .satya-header {
          --satya-navy: #031526;
          --satya-blue: #168cf5;
          --satya-light: #42b5ff;
          --satya-gold: #d9b66d;

          position: sticky;
          top: 0;
          z-index: 9999;
          display: block;
          width: 100%;
          margin: 0 !important;
          padding: 0 !important;
          background: var(--satya-navy);
          border: none;
          border-bottom: 1px solid rgba(55, 155, 255, 0.4);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.18);
          font-family: Arial, Helvetica, sans-serif;
        }

        .satya-header,
        .satya-header * {
          box-sizing: border-box;
        }

        .satya-header nav {
          width: 100%;
          min-height: 96px;
          margin: 0 !important;
          padding: 10px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        /* Logo container: white background improves visibility */
        .satya-header .satya-brand {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 1 330px;
          width: 100%;
          max-width: 330px;
          min-width: 0;
          margin: 0 !important;
          padding: 6px 10px !important;
          background: #ffffff;
          border: 1px solid var(--satya-gold);
          border-radius: 10px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.18);
          line-height: 0;
          text-decoration: none;
          overflow: hidden;
          transition:
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .satya-header .satya-brand:hover {
          border-color: #f4d58a;
          box-shadow: 0 4px 18px rgba(217, 182, 109, 0.25);
        }

        .satya-header .satya-brand img {
          display: block;
          width: 100%;
          max-width: 310px;
          height: auto;
          max-height: 70px;
          margin: 0 !important;
          padding: 0 !important;
          object-fit: contain;
          object-position: center;
          filter: none;
        }

        .satya-header .satya-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(20px, 3vw, 45px);
          list-style: none;
          margin: 0 !important;
          padding: 0 !important;
        }

        .satya-header .satya-links li {
          margin: 0;
          padding: 0;
        }

        .satya-header .satya-links a {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 50px;
          color: #f3f7ff;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
        }

        .satya-header .satya-links a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--satya-blue);
          transform: scaleX(0);
          transition: transform 0.2s ease;
        }

        .satya-header .satya-links a:hover,
        .satya-header .satya-links a.active {
          color: var(--satya-light);
        }

        .satya-header .satya-links a:hover::after,
        .satya-header .satya-links a.active::after {
          transform: scaleX(1);
        }

        .satya-header .satya-quote {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          flex-shrink: 0;
          min-height: 48px;
          padding: 0 22px;
          border: 1px solid #279cff;
          border-radius: 50px;
          background: linear-gradient(135deg, #249bff, #1479ed);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .satya-header .satya-quote:hover {
          background: linear-gradient(135deg, #4bb4ff, #1685ff);
          transform: translateY(-2px);
        }

        .satya-header .satya-phone-icon {
          display: block;
          width: 17px;
          height: 17px;
          flex-shrink: 0;
        }

        .satya-header .satya-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 6px;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          margin: 0;
          padding: 10px;
          border: 1px solid #287fb9;
          border-radius: 12px;
          background: #08233a;
          cursor: pointer;
        }

        .satya-header .satya-toggle span {
          display: block;
          width: 23px;
          height: 2px;
          border-radius: 3px;
          background: #ffffff;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .satya-header .satya-toggle.open span:first-child {
          transform: translateY(8px) rotate(45deg);
        }

        .satya-header .satya-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .satya-header .satya-toggle.open span:last-child {
          transform: translateY(-8px) rotate(-45deg);
        }

        .satya-header .satya-mobile-call {
          display: none;
        }

        @media (max-width: 1050px) {
          .satya-header nav {
            gap: 16px;
            padding: 10px 3%;
          }

          .satya-header .satya-brand {
            flex-basis: 275px;
            max-width: 275px;
            padding: 5px 8px !important;
          }

          .satya-header .satya-brand img {
            max-height: 62px;
          }

          .satya-header .satya-links {
            gap: 20px;
          }

          .satya-header .satya-quote {
            padding: 0 16px;
          }
        }

        @media (max-width: 850px) {
          .satya-header nav {
            min-height: 82px;
            padding: 8px 14px;
            gap: 12px;
          }

          .satya-header .satya-brand {
            flex: 0 1 300px;
            max-width: 300px;
            padding: 5px 8px !important;
            border-radius: 8px;
          }

          .satya-header .satya-brand img {
            width: 100%;
            max-width: 280px;
            max-height: 60px;
          }

          .satya-header .satya-toggle {
            display: flex;
          }

          .satya-header .satya-desktop-call {
            display: none;
          }

          .satya-header .satya-links {
            position: fixed;
            top: 82px;
            right: 0;
            bottom: 0;
            width: min(350px, 88vw);
            height: calc(100vh - 82px);
            height: calc(100dvh - 82px);
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 5px;
            overflow-y: auto;
            margin: 0 !important;
            padding: 22px 22px 35px !important;
            background: linear-gradient(160deg, #061f36, #020e1b);
            border-left: 1px solid rgba(40, 145, 255, 0.25);
            box-shadow: -15px 15px 40px rgba(0, 0, 0, 0.35);
            visibility: hidden;
            pointer-events: none;
            opacity: 0;
            transform: translateX(100%);
            transition:
              transform 0.25s ease,
              opacity 0.25s ease,
              visibility 0.25s ease;
          }

          .satya-header .satya-links.visible {
            visibility: visible;
            pointer-events: auto;
            opacity: 1;
            transform: translateX(0);
          }

          .satya-header .satya-links li {
            width: 100%;
          }

          .satya-header .satya-links a {
            width: 100%;
            min-height: 54px;
            padding: 0 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            font-size: 16px;
          }

          .satya-header .satya-links a::after {
            left: 12px;
            width: 38px;
          }

          .satya-header .satya-mobile-call {
            display: flex;
            margin-top: 20px;
            border-bottom: none;
          }
        }

        @media (max-width: 420px) {
          .satya-header nav {
            min-height: 72px;
            padding: 7px 9px;
            gap: 8px;
          }

          .satya-header .satya-brand {
            flex: 1 1 0;
            max-width: 260px;
            padding: 4px 6px !important;
            border-radius: 7px;
          }

          .satya-header .satya-brand img {
            width: 100%;
            max-width: 100%;
            max-height: 52px;
          }

          .satya-header .satya-toggle {
            width: 43px;
            height: 43px;
          }

          .satya-header .satya-links {
            top: 72px;
            height: calc(100vh - 72px);
            height: calc(100dvh - 72px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .satya-header *,
          .satya-header *::before,
          .satya-header *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <header className="satya-header">
        <nav aria-label="Main navigation">
          <Link
            to="/"
            className="satya-brand"
            aria-label="Satya Invisible Grills home"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Satya Invisible Grills"
            />
          </Link>

          <ul
            id="satya-navigation"
            className={`satya-links ${menuOpen ? "visible" : ""}`}
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li>
              <a
                href={`tel:${PHONE}`}
                className="satya-quote satya-mobile-call"
                onClick={() => setMenuOpen(false)}
              >
                <PhoneIcon />
                Call {PHONE}
              </a>
            </li>
          </ul>

          <a
            href={`tel:${PHONE}`}
            className="satya-quote satya-desktop-call"
          >
            <PhoneIcon />
            Get a Free Quote
          </a>

          <button
            type="button"
            className={`satya-toggle ${menuOpen ? "open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="satya-navigation"
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="satya-phone-icon"
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