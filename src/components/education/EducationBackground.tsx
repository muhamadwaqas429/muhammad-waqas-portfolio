"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function EducationParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 25; // x
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25; // z
    }
    return arr;
  }, [count]);

  useFrame(({ clock, mouse }) => {
    if (!pointsRef.current) return;
    // Rotate gently for dynamic vibe
    pointsRef.current.rotation.y = clock.elapsedTime * 0.03 + mouse.x * 0.2;
    pointsRef.current.rotation.x = clock.elapsedTime * 0.02 + mouse.y * 0.2;
  });

  return (
    <points ref={pointsRef} positions={positions} stride={3}>
      <pointsMaterial
        color="#22d3ee"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.2}
      />
    </points>
  );
}

function FloatingRings() {
  const meshRef = useRef<THREE.Mesh[]>([]);

  const ringCount = 5;
  const ringRadius = 3;
  const rings = useMemo(() => {
    return Array.from({ length: ringCount }, (_, i) => ({
      rotationSpeed: 0.01 + i * 0.002,
      yOffset: -i * 1.5,
      scale: 1 + i * 0.5,
      color: new THREE.Color(`hsl(${i * 60}, 80%, 50%)`),
    }));
  }, []);

  useFrame(({ clock }) => {
    meshRef.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.z = clock.elapsedTime * rings[i].rotationSpeed;
    });
  });

  return (
    <>
      {rings.map((ring, i) => (
        <mesh
          key={i}
          ref={(el) => (meshRef.current[i] = el!)}
          position={[0, ring.yOffset, 0]}
          scale={[ring.scale, ring.scale, ring.scale]}
        >
          <torusGeometry args={[ringRadius, 0.05, 16, 100]} />
          <meshStandardMaterial
            color={ring.color}
            emissive={ring.color}
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </>
  );
}

export default function EducationBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 18], fov: 65 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <EducationParticles />
        <FloatingRings />
      </Canvas>
    </div>
  );
}
