"use client";

import { motion } from "framer-motion";

export default function EducationCard({ edu }: { edu: any }) {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-pink-900/30 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md max-w-md mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white">
        {edu.degree}
      </h3>
      <p className="text-pink-400 font-medium mt-1">{edu.institution}</p>
      <p className="text-gray-300 text-sm mt-1">{edu.period}</p>
      <p className="text-gray-400 text-sm">{edu.location}</p>

      <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-200">
        {edu.courses.map((course: string, idx: number) => (
          <li
            key={idx}
            className="bg-white/10 rounded-lg px-3 py-1 text-sm backdrop-blur"
          >
            {course}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
