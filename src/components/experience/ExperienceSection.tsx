"use client";

import ExperienceBackground from "./ExperienceBackground";
import ExperienceStoryCard from "./ExperienceStoryCard";
import { experiences } from "./experienceData";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <ExperienceBackground />

      <div className="relative z-10 pt-44 pb-36 space-y-32 max-w-6xl mx-auto px-6">
        <motion.h1
          className="text-center text-5xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Career Journey
          <span className="block text-pink-400 text-lg mt-3 font-medium">
            From QA → ERP → Full-Stack Engineer
          </span>
        </motion.h1>

        {experiences.map((exp, index) => (
          <ExperienceStoryCard key={index} exp={exp} />
        ))}
      </div>
    </section>
  );
}
