// src/components/hero/Hero.tsx
"use client";

import { motion } from "framer-motion";
import HeroActions from "./HeroActions";
import HeroBackground from "./HeroBackground";
import Hero3DImage from "./Hero3DImage";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex">
      {/* Full-screen background */}
      <HeroBackground />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center px-6">
        {/* Left: Text */}
        <div className="flex-1 z-10 flex flex-col justify-center items-start text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            Muhammad Waqas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl mt-4 text-gray-300 max-w-lg"
          >
            Aspiring Full-Stack JavaScript Developer | MERN Stack
          </motion.p>

          <HeroActions
            onClickDeveloper={() => alert("Developer role clicked!")}
            onClickFreelancer={() => alert("Freelancer role clicked!")}
          />
        </div>

        {/* Right: Image */}
        <div className="flex-1 z-10 flex justify-center items-center mt-10 md:mt-0">
          <Hero3DImage />
        </div>
      </div>
    </section>
  );
}
