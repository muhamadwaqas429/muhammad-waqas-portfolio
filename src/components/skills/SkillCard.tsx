// src/components/skills/SkillCard.tsx
"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  skill: string;
  icon?: React.ReactNode; // optional icon or image
}

export default function SkillCard({ skill, icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center w-40 h-40"
    >
      {icon && <div className="mb-2">{icon}</div>}
      <span className="text-lg font-semibold">{skill}</span>
    </motion.div>
  );
}
