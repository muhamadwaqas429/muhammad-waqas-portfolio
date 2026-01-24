"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experienceData";

export default function ExperienceTimeline() {
  return (
    <div className="relative max-w-6xl mx-auto space-y-20">
      {/* Energy spine (hidden on mobile) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-purple-500/25 blur-sm" />

      {experienceData.map((job, i) => (
        <motion.div
          key={job.company}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className={`grid md:grid-cols-2 gap-10`}
        >
          {/* Desktop alternating */}
          <div className={i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
            <ExperienceCard job={job} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
