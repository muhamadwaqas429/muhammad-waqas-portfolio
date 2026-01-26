"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function EnergyField() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(7, 2), []);

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.elapsedTime * 0.05 + mouse.x * 0.2;
    meshRef.current.rotation.x = clock.elapsedTime * 0.03 + mouse.y * 0.2;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        wireframe
        color="#a855f7"
        emissive="#ec4899"
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

export default function ProjectsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 18], fov: 70 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <EnergyField />
      </Canvas>
    </div>
  );
}
