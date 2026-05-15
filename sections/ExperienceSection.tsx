"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Building full-stack web applications",
    
  },
  {
    title: "Hackathon Participant",
    
  },
  {
    title: "Open Source Contributor",
    
  },

];

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6">

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#1a1a22] p-6 rounded-xl border border-gray-800"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
          </motion.div>
        ))}
      </div>

    </section>
  );
}