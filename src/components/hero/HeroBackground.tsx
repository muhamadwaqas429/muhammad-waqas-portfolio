"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function HeroBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: { value: 80 },
          color: { value: "#845ec2" },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
          links: {
            enable: true,
            distance: 150,
            color: "#ff5f7e",
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
}
