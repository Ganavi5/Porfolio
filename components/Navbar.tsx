"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 
      ${
        scrolled
          ? "bg-[#0f0f14]/70 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ganavi
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#achievements" className="hover:text-white transition">Achievements</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Buttons */}
        <div className="hidden md:flex gap-3">

          <a
            href="https://github.com/Ganavi5"
            target="_blank"
            className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 
            text-sm transition hover:scale-105"
          >
            🐙 GitHub
          </a>

          <a
            href="https://linkedin.com/in/ganavi-mc-b54032352"
            target="_blank"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
            text-white text-sm hover:scale-105 transition"
          >
            💼 LinkedIn
          </a>

        </div>

      </div>
    </nav>
  );
}