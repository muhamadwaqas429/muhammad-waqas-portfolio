"use client";

import { motion } from "framer-motion";

export default function ExperienceStoryCard({ exp }: { exp: any }) {
  return (
    <motion.div
      className="relative p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(168,85,247,0.15)]"
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <span
        className="uppercase tracking-widest text-sm font-semibold"
        style={{ color: exp.color }}
      >
        {exp.stage}
      </span>

      <h3 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
        {exp.role}
      </h3>

      <p className="text-pink-400 font-medium mt-2">{exp.company}</p>

      <p className="text-gray-300 mt-6 text-lg leading-relaxed">{exp.impact}</p>

      <ul className="grid md:grid-cols-2 gap-4 mt-8">
        {exp.highlights.map((item: string) => (
          <li
            key={item}
            className="p-4 rounded-xl bg-white/10 border border-white/10 text-gray-200"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-8">
        {exp.tech.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
