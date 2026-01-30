"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";

import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import { Navbar } from "@/components/navbar/Navbar";

// Dynamically imported sections
const ProjectsSection = dynamic(
  () => import("@/components/projects/ProjectsSection"),
  { ssr: false }
);
const ExperienceSection = dynamic(
  () => import("@/components/experience/ExperienceSection"),
  { ssr: false }
);
const EducationSection = dynamic(
  () => import("@/components/education/EducationSection"),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("@/components/contact/ContactSection"),
  { ssr: false }
);

export default function Home() {
  // Refs for smooth scrolling
  const heroRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sections: Record<string, React.RefObject<HTMLElement | null>> = {
    Hero: heroRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Experience: experienceRef,
    Education: educationRef,
    Contact: contactRef,
  };

  return (
    <>
      {/* Navbar */}
      <Navbar sections={sections} />

      <main className="relative z-0">
        {/* Hero */}
        <section
          ref={heroRef}
          id="hero"
          className="relative w-full h-screen z-0"
        >
          <Hero />
        </section>

        {/* Skills */}
        <section
          ref={skillsRef}
          id="skills"
          className="relative w-full min-h-screen bg-[#020617] z-0"
        >
          <Skills />
        </section>

        {/* Projects */}
        <section
          ref={projectsRef}
          id="projects"
          className="relative min-h-screen z-0"
        >
          <ProjectsSection />
        </section>

        {/* Experience */}
        <section
          ref={experienceRef}
          id="experience"
          className="relative w-full min-h-screen z-0"
        >
          <ExperienceSection />
        </section>

        {/* Education */}
        <section
          ref={educationRef}
          id="education"
          className="relative min-h-screen z-0"
        >
          <EducationSection />
        </section>

        {/* Contact */}
        <section
          ref={contactRef}
          id="contact"
          className="relative min-h-screen z-0"
        >
          <ContactSection />
        </section>
      </main>
    </>
  );
}
