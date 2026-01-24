"use client";

import { useRef } from "react";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import { Navbar } from "@/components/navbar/Navbar";

export default function Home() {
  // Refs for smooth scroll
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  // Map sections to refs
  const sections = {
    Hero: heroRef,
    Skills: skillsRef,
  };

  return (
    <>
      {/* Navbar with sections */}
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
    </>
  );
}
