"use client";

import { projects } from "./ProjectData";
import ProjectsBackground from "./ProjectBackground";
import ProjectStory from "./ProjectStory";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <ProjectsBackground />

      <div className="relative z-10 pt-40 pb-32 space-y-32">
        <motion.h1
          className="text-center text-5xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Selected Work
          <span className="block text-pink-400 text-lg mt-3 font-medium">
            Real products. Real impact.
          </span>
        </motion.h1>

        {projects.map((project) => (
          <ProjectStory key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
