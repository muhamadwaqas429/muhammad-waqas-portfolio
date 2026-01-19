"use client";

import { MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.08;
    meshRef.current.rotation.x = t * 0.04;
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={0.9} />

      <mesh ref={meshRef} scale={3}>
        <icosahedronGeometry args={[1.4, 2]} />
        <MeshDistortMaterial
          wireframe
          color="#1e293b"
          distort={0.35}
          speed={1.5}
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
    </>
  );
}
