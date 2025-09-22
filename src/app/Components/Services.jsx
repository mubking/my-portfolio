"use client";
import React, { useEffect } from "react";
import {
  FaCode,
  FaMobile,
  FaPalette,
  FaDatabase,
  FaGlobe,
  FaBolt,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200, easing: "ease-in" });
  }, []);

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description:
        "Full-stack web apps using React, Next.js, Node.js, and modern best practices.",
      features: [
        "React & Next.js",
        "Node.js & Express",
        "Database Design",
        "API Development",
      ],
    },
    {
      icon: FaMobile,
      title: "Mobile Development",
      description: "Cross-platform apps with React Native for iOS and Android.",
      features: [
        "React Native",
        "Cross-platform",
        "Native Performance",
        "App Store Deployment",
      ],
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive designs with excellent user experience.",
      features: [
        "Modern Design",
        "User Research",
        "Prototyping",
        "Responsive Design",
      ],
    },
    {
      icon: FaDatabase,
      title: "Backend Development",
      description:
        "Secure APIs, optimized databases, and cloud-ready backends.",
      features: [
        "REST APIs",
        "Authentication",
        "Database Optimization",
        "Cloud Deployment",
      ],
    },
    {
      icon: FaGlobe,
      title: "Crypto Consulting",
      description:
        "Guidance in blockchain, DeFi, and NFT marketplace integration.",
      features: [
        "DeFi Solutions",
        "NFT Development",
        "Blockchain Integration",
        "Trading Strategies",
      ],
    },
    {
      icon: FaBolt,
      title: "Performance Optimization",
      description:
        "Optimizing speed, SEO, and UX with Core Web Vitals in mind.",
      features: [
        "Speed Optimization",
        "SEO Implementation",
        "Core Web Vitals",
        "Analytics Setup",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-5 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-purple-400 font-semibold text-lg mb-4">Services</p>
          <h2 className="text-3xl text-white md:text-4xl font-bold leading-tight mb-6">
            What I{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            From concept to deployment, I provide complete digital solutions to
            help businesses thrive in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-aos="zoom-in"
                className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 p-8 hover:shadow-purple-500/30 group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl mb-6 group-hover:bg-purple-500 transition-all duration-300">
                  <Icon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xlb text-white font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="text-purple-400 font-semibold hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" className="text-center mt-16">
          <div className="backdrop-blur-sm border border-gray-600/30 rounded-xl bg-gray-800/80 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl text-white font-bold mb-4">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Project
              </span>
              ?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss your ideas and bring them to life with cutting-edge
              technology.
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
