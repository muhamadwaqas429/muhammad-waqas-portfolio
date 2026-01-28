"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";

import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import { Navbar } from "@/components/navbar/Navbar";


const ProjectsSection = dynamic(
  () => import("@/components/projects/ProjectsSection"),
  { ssr: false },
);
const ExperienceSection = dynamic(
  () => import("@/components/experience/ExperienceSection"),
  { ssr: false },
);
const EducationSection = dynamic(
  () => import("@/components/education/EducationSection"),
  { ssr: false },
);
const ContactSection = dynamic(
  () => import("@/components/contact/ContactSection"),
  { ssr: false },
);

export default function Home() {
 
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

     
      <section
        ref={projectsRef}
        id="projects"
        className="relative min-h-screen"
      >
        <ProjectsSection />
      </section>

    
      <section
        ref={experienceRef}
        id="experience"
        className="relative w-full min-h-screen"
      >
        <ExperienceSection />
      </section>

      
      <section
        ref={educationRef}
        id="education"
        className="relative min-h-screen"
      >
        <EducationSection />
      </section>

     
      <section ref={contactRef} id="contact" className="relative min-h-screen">
        <ContactSection />
      </section>
    </>
  );
}
