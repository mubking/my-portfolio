"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCode, FaUsers, FaAward, FaCoffee } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: FaCode, label: "Projects Completed", value: "40+" },
    { icon: FaUsers, label: "Happy Clients", value: "30+" },
    { icon: FaAward, label: "Years Experience", value: "3+" },
    { icon: FaCoffee, label: "Cups of Coffee", value: "10+" },
  ];

  const skills = [
    { name: "React", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "React Native", level: 65 },
    { name: "Next.js", level: 90 },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1200,
      delay: 200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="about" className="py-20 px-5 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative" data-aos="fade-right">
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
              <img
                src="/mubs.jpg"
                alt="About Adeshina Mubaraq"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-8 -right-8 backdrop-blur-sm border border-gray-600/30 rounded-xl p-6 max-w-xs bg-gray-800/80"
              data-aos="zoom-in"
            >
              <h4 className="text-purple-400 font-semibold mb-2">
                Crypto Expertise
              </h4>
              <p className="text-sm text-gray-300">
                Multi-role expert in DeFi, NFT, and Metaverse with 2 years of
                trading experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <p className="text-purple-400 font-semibold text-lg mb-4">
                About Me
              </p>
              <h2 className="text-3xl text-white md:text-4xl font-bold leading-tight mb-6">
                Passionate Developer &{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Crypto Expert
                </span>
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  Fascinated by the Web's connectivity, I mastered HTML, CSS,
                  React, Nest.js, React Native and JavaScript at 17, crafting
                  engaging websites that connect people and ideas.
                </p>
                <p>
                  In the Crypto World, I'm a multi-role expert: Tutor, Analyst,
                  Researcher, Community Manager, Trader, and NFT Collector. With
                  2 years of experience, I have in-depth knowledge in this
                  revolutionary space.
                </p>
                <p>
                  Skilled in time management and marketing, I bring order and
                  activity to communities, offering DeFi, NFT, and Metaverse
                  tutoring. Let's connect for a seamless blend of Web and Crypto
                  expertise.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div data-aos="fade-up">
              <h3 className="text-xl text-white font-semibold mb-6">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4" data-aos="zoom-in-up">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-700 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4 group-hover:bg-purple-500 transition-all duration-300">
                  <Icon className="w-8 h-8 text-purple-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
