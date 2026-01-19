// src/components/skills/Skills.tsx
"use client";

import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML/CSS",
    "TailwindCSS",
    "Framer Motion",
    "Three.js",
    "Git/GitHub",
  ];

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-black/95 text-white px-6 py-20 relative overflow-hidden">
      {/* Subtle background gradient & animated tech particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-60 -z-20"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}
