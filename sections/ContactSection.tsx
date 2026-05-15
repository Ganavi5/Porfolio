"use client";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = "mcganavi740@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 flex justify-center relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-[#1a1a22]/80 backdrop-blur-lg 
        border border-gray-800 rounded-2xl p-10 text-center
        hover:shadow-[0_0_40px_rgba(167,139,250,0.3)] transition"
      >
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Let’s Work Together 🚀
        </h2>

        <p className="text-gray-400 mb-8">
          Open to internships, collaborations, and exciting opportunities.
        </p>

        {/* CTA Button */}
        <a
          href={`mailto:${email}`}
          className="inline-block px-8 py-3 rounded-full 
          bg-gradient-to-r from-purple-500 to-pink-500 
          text-white font-medium 
          hover:scale-105 transition"
        >
          Contact Me
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          
          <a
            href="https://github.com/Ganavi5"
            target="_blank"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 
            hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] transition"
          >
            <FaGithub/>
          </a>

          <a
            href="https://linkedin.com/in/ganavi-mc-b54032352"
            target="_blank"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 
            hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] transition"
          >
            <FaLinkedin />
          </a>

          <button
            onClick={copyEmail}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 
            hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] transition"
          >
            {copied ? <Check /> : <Copy />}
          </button>

        </div>

        {/* Email Display */}
        <p className="text-sm text-gray-500 mt-4">
          {email}
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/maqvrqep"
          method="POST"
          className="mt-10 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg 
            bg-gradient-to-r from-purple-500 to-pink-500 
            text-white hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </motion.div>
    </section>
  );
}