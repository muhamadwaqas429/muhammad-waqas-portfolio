"use client";

import { useRef } from "react";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import { Navbar } from "@/components/navbar/Navbar";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import EducationSection from "@/components/education/EducationSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  // References for smooth scrolling
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Sections object to pass to Navbar
  const sections = {
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

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="relative w-full h-screen">
        <Hero />
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        id="skills"
        className="relative w-full min-h-screen bg-[#020617]"
      >
        <Skills />
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="relative min-h-screen"
      >
        <ProjectsSection />
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className="relative w-full min-h-screen"
      >
        <ExperienceSection />
      </section>

      {/* Education Section */}
      <section
        ref={educationRef}
        id="education"
        className="relative w-full min-h-screen"
      >
        <EducationSection />
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="relative w-full min-h-screen"
      >
        <ContactSection />
      </section>
    </>
  );
}
