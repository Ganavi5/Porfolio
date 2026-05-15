"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about"className="py-24 px-6 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
            </div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center mb-10"
            >
                About Me
            </motion.h2>

            {/* Intro */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center text-gray-400 space-y-4 mb-16"
            >
                <p>


                    "I'm Ganavi, a Full Stack Developer passionate about building modern web apps that are scalable and intuitive. I'm also fascinated by AI and ML, and love collaborating on projects that push these technologies forward 🚀"

                </p>

                <p>
                    I enjoy solving real-world problems through clean code and intuitive
                    UI. My interests lie in full-stack development, UI/UX design, and
                    exploring new technologies.
                </p>

                <p>
                    I’m constantly learning and improving, aiming to build impactful
                    projects that create real value.
                </p>
            </motion.div>

            {/* Stats + Focus */}
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">

                    {[
                        { value: "9.45", label: "CGPA" },
                        { value: "100+", label: "DSA Problems" },
                        { value: "4+", label: "Projects Built" },
                        { value: "3+", label: "Hackathons" },
                       
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a22] p-6 rounded-2xl text-center 
              border border-gray-800 
              hover:shadow-[0_0_25px_rgba(167,139,250,0.3)] 
              transition"
                        >
                            <h3 className="text-3xl font-bold text-white">
                                {item.value}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}

                </div>

                {/* Focus Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-[#1a1a22] p-8 rounded-2xl border border-gray-800"
                >
                    <h3 className="text-xl font-semibold mb-4">
                        🎯 Current Focus
                    </h3>

                    <ul className="space-y-3 text-gray-400">
                        <li>• Building full-stack MERN applications</li>
                        <li>• Improving problem-solving skills</li>
                        <li>• Learning advanced React & animations</li>
                        <li>• Exploring real-world project ideas</li>
                        <li>• Passionate about  applying AI and ML to real world problems</li>
                       
                    </ul>
                </motion.div>

            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
                {["Full Stack", "UI/UX", "Web Dev", "Problem Solving", "AI/ML"].map((tag, i) => (
                    <span
                        key={i}
                        className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

        </section>
    );
}