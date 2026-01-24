"use client";

import { useRef } from "react";

interface SkillsCardProps {
  title: string;
  description: string;
  stack: string[];
}

export default function SkillsCard({
  title,
  description,
  stack = [],
}: SkillsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  }

  function resetTilt() {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="
        group
        relative
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        transform-gpu
        hover:border-indigo-400/40
        shadow-xl
        hover:shadow-indigo-500/30
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow Overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 blur-xl pointer-events-none" />

      {/* Title */}
      <h3
        className="text-xl font-semibold text-white tracking-tight"
        style={{ transform: "translateZ(40px)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="mt-3 text-sm text-white/60 leading-relaxed"
        style={{ transform: "translateZ(30px)" }}
      >
        {description}
      </p>

      {/* Stack Pills */}
      <div
        className="mt-6 flex flex-wrap gap-2"
        style={{ transform: "translateZ(50px)" }}
      >
        {stack.map((item, index) => (
          <span
            key={index}
            className="
              text-xs
              px-3
              py-1
              rounded-full
              border border-white/10
              bg-white/5
              text-white/70
              backdrop-blur-md
              transition
              hover:bg-indigo-500/30
              hover:border-indigo-400/50
              hover:text-white
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
