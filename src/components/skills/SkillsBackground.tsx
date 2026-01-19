"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingPoints() {
  const ref = useRef<THREE.Points>(null);

  const positions = new Float32Array(1200 * 3).map(
    () => (Math.random() - 0.5) * 30
  );

  useFrame(({ mouse }) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.001 + mouse.x * 0.002;
    ref.current.rotation.x += 0.0005 + mouse.y * 0.002;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#38bdf8"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function SkillsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <FloatingPoints />
      </Canvas>
    </div>
  );
}
