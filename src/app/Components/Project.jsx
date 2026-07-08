"use client";

import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaEye, FaFilter } from "react-icons/fa";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Temitope Supermarket",
      description:
        "Full-featured e-commerce platform with secure authentication, Paystack payment integration, inventory management, and order tracking. Handles real transactions for an active Nigerian retail business.",
      image: "/image.png",
      category: "web",
      technologies: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Paystack",
        "Tailwind CSS",
      ],
      liveUrl: "https://www.temitope-supermarket.com/",
      githubUrl: "https://github.com/mubking",
      featured: true,
    },
    {
      id: 2,
      title: "TradeFlow Web",
      description:
        "Fractionalized real-world asset purchasing platform on Stellar testnet. Built the FractionalPurchaseModal with live balance fetching via Freighter wallet, BigNumber.js yield calculations, and toast error handling for wallet interactions.",
      image: "/tradeflow.png", // replace with actual screenshot
      category: "crypto",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stellar SDK",
        "Freighter",
        "Tailwind CSS",
      ],
      liveUrl: "https://github.com/mubking",
      githubUrl: "https://github.com/mubking",
      featured: true,
    },
    {
      id: 3,
      title: "protox-sdk",
      description:
        "Open-source TypeScript SDK for interacting with Stellar/Soroban smart contracts. Contributed features including contract versioning support and improved error handling for Freighter wallet edge cases.",
      image: "/protox.png", // replace with actual screenshot
      category: "crypto",
      technologies: ["TypeScript", "Stellar", "Soroban", "Node.js"],
      liveUrl: "https://github.com/mubking",
      githubUrl: "https://github.com/mubking",
      featured: true,
    },
    {
      id: 4,
      title: "Mo Photo Studio",
      description:
        "Professional photography studio website with portfolio showcase, booking system, and client gallery management. Built with Next.js and EmailJS for direct client inquiries.",
      image: "/mo.png",
      category: "web",
      technologies: ["Next.js", "TypeScript", "EmailJS", "Tailwind CSS"],
      liveUrl: "https://mo-photo.vercel.app/",
      githubUrl: "https://github.com/mubking",
      featured: false,
    },
    {
      id: 5,
      title: "FixNaija",
      description:
        "Next.js service marketplace connecting Nigerian consumers with verified local service providers. Features include profile picture uploads, review submission, live dashboard data, and MongoDB Atlas integration.",
      image: "/fixnaija.png", // replace with actual screenshot
      category: "web",
      technologies: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
      liveUrl: "https://github.com/mubking",
      githubUrl: "https://github.com/mubking",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "Personal developer portfolio with dark theme, AOS animations, responsive layout, and live project showcase. Built entirely from scratch with Next.js and Tailwind CSS.",
      image: "/images.png",
      category: "design",
      technologies: ["Next.js", "Tailwind CSS", "AOS", "React Icons"],
      liveUrl: "https://my-portfolio-sable-kappa.vercel.app/",
      githubUrl: "https://github.com/mubking",
      featured: false,
    },
  ];

  // Also update the categories array — add "web3" and remove "mobile" (no real mobile projects):

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "crypto", name: "Web3 / Blockchain" },
    { id: "design", name: "UI/UX Design" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              A showcase of my latest work in web development, mobile apps, and
              blockchain technology
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-5 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-gray-800 text-gray-400 hover:text-purple-400 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Projects */}
          {selectedCategory === "all" && (
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl text-white font-bold leading-tight mb-8 text-center">
                Featured Projects
              </h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects
                  .filter((p) => p.featured)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} featured />
                  ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects
              .filter((p) => selectedCategory !== "all" || !p.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaFilter className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-400">
                Try selecting a different category to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const ProjectCard = ({ project, featured = false }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className={`bg-gray-800 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 hover:border-purple-500/50 group ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-500 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaExternalLinkAlt size={20} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-500 rounded-full hover:bg-blue-500 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl text-white font-bold mb-3 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-sm rounded-full text-purple-400 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-blue-400 transition-colors font-semibold flex items-center gap-2"
            >
              <FaEye size={16} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors font-semibold flex items-center gap-2"
            >
              <FaGithub size={16} />
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
