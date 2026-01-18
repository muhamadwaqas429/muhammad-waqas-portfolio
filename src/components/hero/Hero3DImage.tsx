// src/components/hero/Hero3DImage.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero3DImage() {
  return (
    <motion.div
      initial={{ y: -30, rotateY: -15, rotateX: -5 }}
      animate={{
        y: [0, -30, 0],
        rotateY: [-15, 15, -15],
        rotateX: [-5, 5, -5],
      }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center perspective-1000"
    >
      {/* 3D-ish floating image */}
      <motion.div
        className="absolute w-full h-full rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20"
        style={{ transformStyle: "preserve-3d" }}
        animate={{
          rotateY: [0, 10, -10, 0],
          rotateX: [0, 5, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <Image
          src="/profile-pic.png" // replace with your image
          alt="Muhammad Waqas"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Subtle floating gradient glow */}
      <motion.div
        className="absolute w-full h-full rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
