"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ExperienceCard({ job }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 160, damping: 16 }}
      className="group relative bg-white/6 backdrop-blur-2xl border border-white/12 p-7 rounded-2xl shadow-xl hover:shadow-purple-500/40 overflow-hidden"
    >
      {/* Premium glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-purple-500/15 blur-2xl transition" />

      <div className="relative z-10 space-y-3">
        {/* Company */}
        <h3 className="text-2xl font-bold text-white tracking-wide">
          {job.company}
        </h3>

        {/* Role */}
        <p className="text-purple-400 font-semibold text-sm md:text-base">
          {job.role}
        </p>

        {/* Meta */}
        <p className="text-xs text-gray-400">
          {job.date} • {job.location}
        </p>

        {/* Impact Highlight */}
        <p className="text-xs font-semibold text-purple-300">
          Impact: {job.impact}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {job.stack.map((tech: string) => (
            <Badge
              key={tech}
              className="bg-white/10 text-gray-200 border border-white/15"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Achievements */}
        <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
          {job.points.map((point: string) => (
            <li key={point} className="flex gap-2">
              <span className="text-purple-400">▹</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
