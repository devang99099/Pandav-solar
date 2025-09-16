// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../assets/footer-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white  pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between max-md:flex-col gap-10 pb-3 border-b border-gray-700">
          {/* Left - Logo and tagline */}
          <div className="space-y-8 max-md:space-y-5">
            <img src={footerLogo} alt="" className="ml-10 w-30 max-md:ml-0" />
            <p className="text-sm text-gray-400 max-lg:max-w-[300px] text-start">
              We power your world with clean and efficient solar solutions.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="space-y-2 ">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-base text-gray-400 text-center max-md:text-start">
              <li>
                <NavLink to="/" className="hover:text-white transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-white transition">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white transition">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center max-md:text-start">
              Contact Us
            </h3>
            <div className="text-gray-400 text-base  space-y-3">
              <div>
                <NavLink to="/" className="hover:text-white ">
                  📍 123 Solar Street, India
                </NavLink>
              </div>

              <div>
                <NavLink to="/" className="hover:text-white ">
                  📞 +91 70692 16551
                </NavLink>
              </div>

              <div>
                <NavLink to="/" className="hover:text-white ">
                  ✉️ info@pandavsolar.com
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Pandav Solar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
