"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = new Float32Array(1600 * 3).map(
    () => (Math.random() - 0.5) * 40,
  );

  useFrame(({ mouse }) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0012 + mouse.x * 0.002;
    ref.current.rotation.x += 0.0007 + mouse.y * 0.002;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.055}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ExperienceBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.5} />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
