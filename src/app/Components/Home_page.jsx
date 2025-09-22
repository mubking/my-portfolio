"use client";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaArrowDown,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I'm Adeshina Mubaraq";
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Init AOS once
  useEffect(() => {
    Aos.init({
      duration: 1500, // animation duration
      delay: 100, // delay before animation
      easing: "ease-in-out",
      once: true, // run only once
    });
  }, []);

  // ✅ Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <p className="text-purple-400 text-lg font-semibold tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="animate-pulse">|</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                Professional Web Designer & App Developer
              </h2>
            </div>

            <p
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
              data-aos="fade-up"
            >
              Passionate and innovative Software Developer who specializes in
              creating fast, responsive, and user-friendly websites. With over 3
              years of experience in Web Development, working with clients from
              various industries and sectors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4" data-aos="zoom-in">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-gray-800 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Let's Talk
              </a>
              <button className="px-6 py-3 text-purple-400 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                <FaDownload size={20} />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8 text-white" data-aos="fade-up">
              <a
                href="https://github.com/mubking"
                className="p-3  rounded-lg bg-gray-800 hover:bg-purple-500 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mubking"
                className="p-3 rounded-lg bg-gray-800 hover:bg-purple-500 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:Adeshinamubarak6@gmail.com"
                className="p-3 rounded-lg bg-gray-800 hover:bg-purple-500 transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative" data-aos="fade-left">
            <div className="relative z-10">
              <div className="aspect-square max-w-lg mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30"></div>
                <img
                  src="/image.jpeg"
                  alt="Adeshina Mubaraq"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          data-aos="fade-up"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <FaArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
