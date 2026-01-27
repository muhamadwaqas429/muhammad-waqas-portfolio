"use client";

import { motion } from "framer-motion";

export default function EducationCard({ edu }: { edu: any }) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl space-y-4 hover:scale-105 transition-transform duration-500"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        {edu.degree}
      </h2>
      <p className="text-pink-400 font-semibold">
        {edu.university} | {edu.location}
      </p>
      <p className="text-gray-300 italic">{edu.duration}</p>

      <ul className="grid md:grid-cols-2 gap-2 text-gray-200 mt-2">
        {edu.courses.map((course: string) => (
          <li key={course} className="px-4 py-2 rounded-xl bg-white/10">
            {course}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
