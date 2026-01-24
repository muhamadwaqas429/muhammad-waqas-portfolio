"use client";

import SkillsBackground from "@/components/skills/SkillsBackground";
import SkillsCard from "@/components/skills/SkillsCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        flex
        items-center
        py-28
        px-6
      "
    >
      {/* Background */}
      <SkillsBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Core Engineering Skills
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl text-lg">
            Production-ready technologies I use to build scalable, high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SkillsCard
            title="Full-Stack Application Development"
            description="Designing modern, scalable web applications using Next.js, React, and Node.js with real-world architecture."
            stack={[
              "Next.js",
              "React",
              "JavaScript (ES6+)",
              "Node.js",
              "Express.js",
            ]}
          />

          <SkillsCard
            title="Backend Architecture & APIs"
            description="Building secure REST APIs with authentication, file uploads, and production-ready backend logic."
            stack={[
              "Node.js",
              "Express.js",
              "REST APIs",
              "JWT Authentication",
              "Multer",
            ]}
          />

          <SkillsCard
            title="Database & Cloud Engineering"
            description="Designing scalable data models and managing cloud storage with efficient backend integration."
            stack={[
              "MongoDB",
              "Mongoose",
              "Schema Design",
              "Cloudinary",
            ]}
          />

          <SkillsCard
            title="State Management & UI Engineering"
            description="Building responsive interfaces, managing application state, and collaborating in real-world team workflows."
            stack={[
              "Redux Toolkit",
              "Context API",
              "Tailwind CSS",
              "Git",
              "GitHub",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
