"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function EnergyCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(7, 2), []);

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y = clock.elapsedTime * 0.05 + mouse.x * 0.3;
    meshRef.current.rotation.x = clock.elapsedTime * 0.03 + mouse.y * 0.3;

    const scale = 1 + Math.sin(clock.elapsedTime * 1.2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        wireframe
        color="#8b5cf6"
        emissive="#ec4899"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function CosmicParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(1800 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 60;
    }
    return arr;
  }, []);

  useFrame(({ mouse }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0005 + mouse.x * 0.001;
    pointsRef.current.rotation.x += 0.0003 + mouse.y * 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial size={0.05} color="#f472b6" opacity={0.6} transparent />
    </points>
  );
}

export default function ExperienceBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 22], fov: 70 }}>
        <color attach="background" args={["#020617"]} />

        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#a78bfa" />

        <EnergyCore />
        <CosmicParticles />
      </Canvas>
    </div>
  );
}
