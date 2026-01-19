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
        py-24
        px-6
      "
    >
      {/* Background (UNCHANGED) */}
      <SkillsBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Core Technical Skills
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl">
            Technologies I use together to design, build, and scale real-world
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillsCard
            title="Full-Stack Application Development"
            description="Building production-ready web applications using modern frontend frameworks connected to scalable backend services."
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
            description="Designing secure RESTful APIs with authentication, file handling, and clean server-side architecture."
            stack={[
              "Node.js",
              "Express.js",
              "REST APIs",
              "JWT Authentication",
              "Multer",
            ]}
          />

          <SkillsCard
            title="Database & Data Modeling"
            description="Managing application data with schema design, validation, and efficient querying for real-world use cases."
            stack={[
              "MongoDB",
              "Mongoose",
              "Schema Design",
              "Data Relationships",
            ]}
          />

          <SkillsCard
            title="State, Styling & Collaboration"
            description="Managing application state, building responsive UI, and working efficiently in team-based environments."
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
