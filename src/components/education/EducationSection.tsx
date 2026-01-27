"use client";

import EducationBackground from "./EducationBackground";
import EducationCard from "./EducationCard";
import { educationList } from "./educationData";
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-32">
      <EducationBackground />

      <div className="relative z-10 space-y-20">
        <motion.h1
          className="text-center text-5xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Education & Learning
          <span className="block text-pink-400 text-lg mt-3 font-medium">
            Knowledge, skills, and achievements
          </span>
        </motion.h1>

        <div className="space-y-16">
          {educationList.map((edu) => (
            <EducationCard key={edu.degree} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
