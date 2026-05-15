"use client";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "Java", "C++", "C"],
    color: "from-yellow-500 to-orange-400",
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Atlas"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Cloud & Tools",
    skills: ["Git", "GitHub", "Vercel", "Netlify"],
    color: "from-green-500 to-emerald-400",
  },
  {
    title: "AI/ML",
    skills: [ "PyTorch", "Pandas"],
    color: "from-purple-500 to-pink-400",
  },


];

export default function SkillsSection() {
  return (
    <section id="skills"className="py-20 px-6">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        ✨ Technical Skills ✨
      </motion.h2>

      <p className="text-center text-gray-400 mb-12">
        Tools and Tech I Leverage to build modern applications
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#1a1a22] p-8 rounded-2xl border border-gray-800 
            hover:scale-105 hover:shadow-[0_0_30px_rgba(167,139,250,0.3)] 
            transition duration-300"
          >

            {/* Icon Circle */}
            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}>
              <span className="text-white text-xl">★</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-6">
              {category.title}
            </h3>

            {/* Skills List */}
            <div className="space-y-3">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-800/60 text-center py-2 rounded-lg text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}