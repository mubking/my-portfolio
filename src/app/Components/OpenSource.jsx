"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaCheckCircle } from "react-icons/fa";
import { SiStellar } from "react-icons/si";

const contributions = [
  {
    repo: "Protox-Labs/protox-sdk",
    ecosystem: "Stellar / Web3",
    ecosystemColor: "from-purple-500 to-blue-500",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    issues: 4,
    points: 800,
    highlights: [
      "Document SDK configuration options",
      "Add tests for vault deposit method",
      "Add transaction history fetcher",
      "Fix incorrect network fallback behavior",
    ],
    githubUrl: "https://github.com/Protox-Labs/protox-sdk",
  },
  {
    repo: "BETAIL-BOYS/TradeFlow-Web",
    ecosystem: "Stellar / Web3",
    ecosystemColor: "from-purple-500 to-blue-500",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    issues: 3,
    points: 550,
    highlights: [
      "Connect Soroban contract bindings to Next.js frontend",
      "Display toast notifications for failed Freighter wallet events",
      "Add fractionalized RWA purchasing component",
    ],
    githubUrl: "https://github.com/BETAIL-BOYS/TradeFlow-Web",
  },
  {
    repo: "BETAIL-BOYS/TradeFlow-Core",
    ecosystem: "Stellar / Web3",
    ecosystemColor: "from-purple-500 to-blue-500",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    issues: 1,
    points: 200,
    highlights: [
      "Add contract versioning state variable for future upgrades",
    ],
    githubUrl: "https://github.com/BETAIL-BOYS/TradeFlow-Core",
  },
  {
    repo: "JunirezZ/YieldVault-RWA",
    ecosystem: "Stellar / Web3",
    ecosystemColor: "from-purple-500 to-blue-500",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    issues: 1,
    points: 200,
    highlights: [
      "Share price calculation logic for yield vault contracts",
    ],
    githubUrl: "https://github.com/JunirezZ/YieldVault-RWA",
  },
  {
    repo: "RevoraOrg/Revora-Contracts",
    ecosystem: "Stellar / Web3",
    ecosystemColor: "from-purple-500 to-blue-500",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    issues: 1,
    points: 200,
    highlights: [
      "Implement concentration limit hardening",
    ],
    githubUrl: "https://github.com/RevoraOrg/Revora-Contracts",
  },
  {
    repo: "Axionvera/axionvera-dashboard",
    ecosystem: "Frontend / UI",
    ecosystemColor: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    issues: 5,
    points: 1000,
    highlights: [
      "Build the BalanceCard Component",
      "Implement the DepositForm Component",
      "Standardize Top-Level Navigation (Navbar & Sidebar)",
      "Add Skeletons for Dashboard Loading States",
      "Implement user Profile pages with maintainer historical stats",
    ],
    githubUrl: "https://github.com/Axionvera/axionvera-dashboard",
  },
  {
    repo: "Zakky-Fat/Very-Princess",
    ecosystem: "Frontend / UI",
    ecosystemColor: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    issues: 2,
    points: 400,
    highlights: [
      "API Rate Limiting for Fastify Endpoints",
      "Advanced Soroban Feature: Batch Allocation for Admins",
    ],
    githubUrl: "https://github.com/Zakky-Fat/Very-Princess",
  },
  {
    repo: "SafeVault/vestroll",
    ecosystem: "Frontend / UI",
    ecosystemColor: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    issues: 1,
    points: 200,
    highlights: [
      "Implement Update Milestone Status API",
    ],
    githubUrl: "https://github.com/SafeVault/vestroll",
  },
  {
    repo: "LabsCrypt/flowfi",
    ecosystem: "Frontend / UI",
    ecosystemColor: "from-blue-500 to-cyan-500",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    issues: 1,
    points: 150,
    highlights: [
      "Frontend: Stream Details Screen",
    ],
    githubUrl: "https://github.com/LabsCrypt/flowfi",
  },
  {
    repo: "Muse-AI/Decentr-Marketplace",
    ecosystem: "AI / Other",
    ecosystemColor: "from-emerald-500 to-teal-500",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    issues: 1,
    points: 200,
    highlights: [
      "Dashboard Data Refresh implementation",
    ],
    githubUrl: "https://github.com/Muse-AI-Generated-Art-Marketplace",
  },
];

const stats = [
  { label: "All-Time Points", value: "3,850", icon: FaStar },
  { label: "Issues Resolved", value: "21", icon: FaCheckCircle },
  { label: "Repositories", value: "10+", icon: FaCodeBranch },
  { label: "Ecosystem", value: "Stellar", icon: SiStellar },
];

const OpenSource = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section id="opensource" className="py-20 px-5 bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <p className="text-purple-400 font-semibold text-lg mb-4">
            Open Source
          </p>
          <h2 className="text-3xl text-white md:text-4xl font-bold leading-tight mb-6">
            Real Contributions to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Real Codebases
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Active contributor on the Drips Wave platform across 10+ open-source
            repositories in the Stellar/Soroban ecosystem and beyond.
          </p>
        </div>

        {/* Stats Bar */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          data-aos="fade-up"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mb-3 group-hover:bg-purple-500 transition-all duration-300">
                  <Icon className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Contribution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributions.map((contrib, i) => (
            <div
              key={i}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {/* Repo header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <FaGithub className="text-gray-400 flex-shrink-0" size={16} />
                    <span className="text-white font-semibold text-sm truncate group-hover:text-purple-400 transition-colors">
                      {contrib.repo}
                    </span>
                  </div>
                  <span
                    className={`inline-block px-2 py-0.5 text-xs rounded-full border font-medium ${contrib.badgeColor}`}
                  >
                    {contrib.ecosystem}
                  </span>
                </div>
                <a
                  href={contrib.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-700 rounded-lg hover:bg-purple-500 transition-all duration-300 flex-shrink-0 ml-2"
                >
                  <FaExternalLinkAlt size={12} className="text-gray-400 hover:text-white" />
                </a>
              </div>

              {/* Points + issues */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${contrib.ecosystemColor}`}></div>
                  <span className="text-purple-400 font-bold text-sm">{contrib.points} pts</span>
                </div>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400 text-sm">{contrib.issues} issue{contrib.issues > 1 ? "s" : ""} closed</span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 flex-1">
                {contrib.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <FaCheckCircle
                      size={12}
                      className="text-purple-400 flex-shrink-0 mt-1"
                    />
                    <span className="text-gray-400 text-xs leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14" data-aos="fade-up">
          <a
            href="https://drips.network/wave/users/982bb62d-8256-49c6-a626-a572e336f11e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <FaExternalLinkAlt size={16} />
            View Full Contribution Profile on Drips Wave
          </a>
        </div>

      </div>
    </section>
  );
};

export default OpenSource;