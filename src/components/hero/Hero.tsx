"use client";

import { motion } from "framer-motion";
import HeroActions from "./HeroActions";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <HeroBackground />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold z-10"
      >
        Muhammad Waqas
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-2xl mt-4 z-10 text-gray-300 max-w-xl"
      >
        Aspiring Full-Stack JavaScript Developer | MERN Stack
      </motion.p>

      <HeroActions
        onClickDeveloper={() => alert("Developer role clicked!")}
        onClickFreelancer={() => alert("Freelancer role clicked!")}
      />
    </section>
  );
}
