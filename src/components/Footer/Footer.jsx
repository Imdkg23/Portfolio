import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050414] bg-opacity-50 backdrop-blur-md text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-[7vw] md:px-[7vw] lg:px-[20vw] flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <div
          className="text-lg font-semibold cursor-pointer hover:scale-105 transition-transform"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Deep</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Ghosh</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} Deep Ghosh. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Imdkg23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/deep-kumar-ghosh-3a002a265/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
