"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center text-center px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 opacity-30 blur-3xl rounded-full"></div>
      </div>

      <div className="space-y-6 max-w-3xl">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Ganavi
          </span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300"
        >
          MERN Stack Developer
        </motion.h2>

        {/* Location + College BADGES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="px-4 py-1 text-sm rounded-full bg-gray-800 border border-gray-700">
            📍 Bengaluru, India
          </span>

          <span className="px-4 py-1 text-sm rounded-full bg-gray-800 border border-gray-700">
            🎓 VIT Bhopal University
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg"
        >
          I build modern, scalable web applications using MERN stack.
          Passionate about creating clean UI, solving problems, and learning new technologies,and exploring AI/ML technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-gray-600 hover:bg-gray-800 transition"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition"
          >
            Download Resume
          </a>
        </motion.div>

      </div>

    </section>
  );
}