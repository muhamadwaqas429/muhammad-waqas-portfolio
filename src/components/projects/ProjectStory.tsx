"use client";

import { motion } from "framer-motion";

export default function ProjectStory({ project }: { project: any }) {
  return (
    <motion.div
      className="max-w-4xl mx-auto py-24 px-6 space-y-8"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        {project.title}
      </h2>

      <p className="text-pink-400 font-medium text-lg">
        {project.role}
      </p>

      <p className="text-gray-300 text-lg leading-relaxed">
        {project.impact}
      </p>

      <ul className="grid md:grid-cols-2 gap-4 text-gray-200">
        {project.highlights.map((item: string) => (
          <li key={item} className="border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-200">
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.live}
        target="_blank"
        className="inline-block mt-6 px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-400 transition text-white font-semibold"
      >
        View Live Project →
      </a>
    </motion.div>
  );
}
