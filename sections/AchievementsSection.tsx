"use client";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "9.45 CGPA",
    description: "Top 1% in university with consistent academic excellence",
    year: "2025",
  },
  {
    title: "Visa Payments cybersecurity Program",
    description: "Completed training and certification in cybersecurity",
    year: "2025",
  },
  {
    title: "Hackathon Paticipation",
    description: "interested in hackathons and have participated in 3+",
    year: "2025",
  },
  {
    title: "Solved 100+ DSA Problems",
    description: "Across LeetCode and other platforms",
    year: "2026",
  },
  {
    title: "MERN Project Deployment",
    description: "Built and deployed full-stack apps",
    year: "2025",
  },
  {
    title: "Selected for GIRL SCRIPT SUMMER OF CODE 2026",
    description: "Open source contribution under AI and ML track",
    year: "2025",
  },
  {
    title: "Top 1% in 10 th standard",
    description: "95%",
    year: "2022",
  },
  {
    title: "Top 1% in 12 th standard",
    description: "94%",
    year: "2024",
  },

];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Achievements
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#1a1a22] p-6 rounded-2xl 
            border border-gray-800 
            hover:scale-105 
            hover:shadow-[0_0_25px_rgba(167,139,250,0.3)] 
            transition duration-300"
          >

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 mb-3">
              {item.description}
            </p>

            <p className="text-sm text-gray-500">
              {item.year}
            </p>

          </motion.div>
        ))}
      </div>

    </section>
  );
}