// src/components/hero/HeroBackground.tsx
"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface ParticleProps {
  count?: number;
  spread?: number;
  color?: string;
  speed?: number;
  target?: THREE.Vector3;
}

// Floating particles with optional target (for image aura)
function FloatingParticles({
  count = 1500,
  spread = 30,
  color = "#0ffeff",
  speed = 0.002,
  target,
}: ParticleProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useRef<Float32Array>(
    new Float32Array(count * 3).map(() => (Math.random() - 0.5) * spread)
  );

  useFrame(({ mouse }) => {
    if (pointsRef.current) {
      // Rotate background
      pointsRef.current.rotation.y += 0.0015 + mouse.x * 0.002;
      pointsRef.current.rotation.x += 0.0008 + mouse.y * 0.002;

      // Animate particle positions
      const pos = pointsRef.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < pos.length; i += 3) {
        pos[i + 1] -= speed; // particles slowly fall
        if (pos[i + 1] < -15) pos[i + 1] = 15; // reset top

        // Optional aura effect around target
        if (target) {
          const dx = pos[i] - target.x;
          const dz = pos[i + 2] - target.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist < 5) pos[i + 1] += 0.01; // subtle push up near image
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={positions.current}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        transparent
        color={color}
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function HeroBackground() {
  const imageTarget = new THREE.Vector3(5, 0, 0); // adjust to Hero3DImage position

  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      {/* Background gradient color */}
      <color attach="background" args={["#0f172a"]} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Full-screen floating particles */}
      <FloatingParticles />

      {/* Particle aura behind Hero image */}
      <FloatingParticles
        count={300}
        spread={6}
        color="#a78bfa"
        speed={0.004}
        target={imageTarget}
      />

      {/* Subtle gradient planes for depth */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#4f46e5"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, -5]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#f472b6"
          transparent
          opacity={0.03}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Canvas>
  );
}
