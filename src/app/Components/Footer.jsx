import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mubking", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mubking",
      label: "LinkedIn",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/hardeshina.harlmubarak?mibextid=ZbWKwL",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/adeshina_mubaraq?igshid=MzNlNGNkZWQ4Mg==",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-12 py-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl text-white font-bold mb-4">
                Mubaraq
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Codes
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full-stack developer and Web3 engineer building production-grade
                applications with Next.js, TypeScript, Node.js, and
                Stellar/Soroban. Based in Nigeria, working remotely worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex text-white gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a
                  href="mailto:Adeshinamubarak6@gmail.com"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  Adeshinamubarak6@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a
                  href="tel:+2349056116119"
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  +234 905 611 6119
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <p className="text-white">Nigeria</p>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">
                  Available for remote work
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MubaraqCodes. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart size={16} className="text-purple-400 fill-current" />
              <span>in Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
