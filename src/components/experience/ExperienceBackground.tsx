"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";


function ExperienceParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 600;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return arr;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.elapsedTime * 0.03 + mouse.x * 0.2;
    pointsRef.current.rotation.x = clock.elapsedTime * 0.02 + mouse.y * 0.2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* ✅ Correct usage: args prop */}
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#facc15"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.2}
      />
    </points>
  );
}


function ExperienceRings() {
  const meshRefs = useRef<THREE.Mesh[]>([]);

  const rings = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        rotationSpeed: 0.01 + i * 0.002,
        yOffset: -i * 1.5,
        scale: 1 + i * 0.5,
        color: new THREE.Color(`hsl(${i * 60}, 80%, 50%)`),
      })),
    [],
  );

  useFrame(({ clock }) => {
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.z = clock.elapsedTime * rings[i].rotationSpeed;
    });
  });

  return (
    <>
      {rings.map((ring, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
          position={[0, ring.yOffset, 0]}
          scale={[ring.scale, ring.scale, ring.scale]}
        >
          <torusGeometry args={[3, 0.05, 16, 100]} />
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

export default function ExperienceBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 18], fov: 65 }}>
        <color attach="background" args={["#0f172a"]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <ExperienceParticles />
        <ExperienceRings />
      </Canvas>
    </div>
  );
}
