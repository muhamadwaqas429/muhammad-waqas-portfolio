"use client";

import { useRef } from "react";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import { Navbar } from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const sections = {
    Hero: heroRef,
    Skills: skillsRef,
    Projects: projectsRef,
  };

  return (
    <>
      <Navbar sections={sections} />

      <section ref={heroRef} id="hero" className="relative w-full h-screen">
        <Hero />
      </section>

      <section
        ref={skillsRef}
        id="skills"
        className="relative w-full min-h-screen bg-[#020617]"
      >
        <Skills />
      </section>

      <section id="projects" className="relative min-h-screen">
        <ProjectsSection />
      </section>
    </>
  );
}
