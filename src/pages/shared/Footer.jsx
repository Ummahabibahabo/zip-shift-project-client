import React from "react";
import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-2xl py-10 px-6 mt-10">
      {/* Logo + Description */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-lime-400">ZapShift</h2>

        <p className="max-w-xl mx-auto mt-3 text-gray-300 text-sm">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Menu */}
      <ul className="flex justify-center gap-8 mt-8 text-gray-300 text-sm">
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">Coverage</li>
        <li className="hover:text-white cursor-pointer">About Us</li>
        <li className="hover:text-white cursor-pointer">Pricing</li>
        <li className="hover:text-white cursor-pointer">Blog</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex justify-center mt-8 gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaLinkedin size={24} className="text-blue-500" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaGithub size={24} />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/YOUR_USERNAME"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaFacebook size={24} className="text-blue-600" />
        </a>

        {/* Portfolio */}
        <a
          href="https://YOUR-PORTFOLIO-LINK.com"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaGlobe size={24} className="text-lime-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
