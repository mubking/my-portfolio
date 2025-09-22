"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.current?.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "Adeshinamubarak6@gmail.com",
      href: "mailto:Adeshinamubarak6@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+234 905 611 6119",
      href: "tel:+2349056116119",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Nigeria",
      href: null,
    },
  ];

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
    { icon: FaTwitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 px-5 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-purple-400 font-semibold text-lg mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl text-white md:text-4xl font-bold leading-tight mb-6">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            I'm available for freelance projects. Hire me and get your project
            done with cutting-edge technology and modern best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8" data-aos="fade-right">
            <div>
              <h3 className="text-xl text-white font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.title}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div data-aos="fade-up">
              <h3 className="text-xl text-white font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4 text-white">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div
              className="backdrop-blur-sm border border-gray-600/30 rounded-xl bg-gray-800/80 p-6"
              data-aos="zoom-in"
            >
              <h4 className="font-semibold text-purple-400 mb-2">
                Current Status
              </h4>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white">Available for projects</span>
              </div>
              <p className="text-sm text-gray-400">
                I'm currently accepting new projects and would love to hear
                about yours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <div className="bg-gray-700 rounded-xl border border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h3 className="text-xl text-white font-bold mb-6">
                Send Message
              </h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div data-aos="fade-up">
                    <label
                      htmlFor="name"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full text-white px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div data-aos="fade-up" data-aos-delay="100">
                    <label
                      htmlFor="email"
                      className="block text-white text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 text-white  border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                  <label
                    htmlFor="subject"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 text-white py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Project subject"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="300">
                  <label
                    htmlFor="message"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full text-[#fff] px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-aos="zoom-in"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
