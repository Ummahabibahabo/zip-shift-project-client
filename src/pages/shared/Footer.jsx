import React from "react";
import { FaFacebook, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import Logo from "../../Components/Logo";
import CustonNavLink from "./Navbar/CustonNavLink";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-2xl py-10 px-6 mt-10">
      {/* Logo + Description */}
      <div className="text-center">
        <Logo></Logo>

        <p className="max-w-xl mx-auto mt-3 text-gray-300 text-sm">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Menu */}
      <ul className="flex justify-center gap-8 mt-8 text-gray-300 text-sm">
        <li>
          <CustonNavLink
            to="/"
            inactiveColor="text-white hover:text-blue-400"
            activeColor="text-blue-500"
          >
            Services
          </CustonNavLink>
        </li>
        <li>
          <CustonNavLink
            to="/coverage"
            inactiveColor="text-white hover:text-blue-400"
            activeColor="text-blue-500"
          >
            Coverage
          </CustonNavLink>
        </li>
        <li>
          <CustonNavLink
            to="/about"
            inactiveColor="text-white hover:text-blue-400"
            activeColor="text-blue-500"
          >
            About Us
          </CustonNavLink>
        </li>
        <li>
          <CustonNavLink
            to="/pricie"
            inactiveColor="text-white hover:text-blue-400"
            activeColor="text-blue-500"
          >
            Pricing
          </CustonNavLink>
        </li>
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
          <FaLinkedin size={24} className="text-white" />
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
          <FaFacebook size={24} className="text-white" />
        </a>

        {/* Portfolio */}
        <a
          href="https://YOUR-PORTFOLIO-LINK.com"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition"
        >
          <FaGlobe size={24} className="text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
