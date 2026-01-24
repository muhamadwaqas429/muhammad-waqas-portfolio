"use client";

import ExperienceBackground from "./ExperienceBackground";
import ExperienceTimeline from "./ExperienceTimeline";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="relative min-h-screen py-36 overflow-hidden">
      <ExperienceBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold text-center text-white mb-24"
        >
          Experience
          <span className="block text-purple-400 text-lg mt-3 font-medium">
            Real Work. Real Impact. Real Skill.
          </span>
        </motion.h2>

        <ExperienceTimeline />
      </div>
    </section>
  );
}
