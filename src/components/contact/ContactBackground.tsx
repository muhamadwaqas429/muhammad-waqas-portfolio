"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingSpheres() {
  const groupRef = useRef<THREE.Group>(null);

  const spheres = useMemo(() => {
    const temp: THREE.Mesh[] = [];
    for (let i = 0; i < 40; i++)
      temp.push(
        new THREE.Mesh(
          new THREE.SphereGeometry(Math.random() * 0.2 + 0.1, 16, 16),
        ),
      );
    return temp;
  }, []);

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.05 + mouse.x * 0.1;
    groupRef.current.rotation.x = clock.elapsedTime * 0.03 + mouse.y * 0.1;
  });

  return (
    <group ref={groupRef}>
      {spheres.map((mesh, i) => (
        <mesh
          key={i}
          position={[
            Math.random() * 12 - 6,
            Math.random() * 6 - 3,
            Math.random() * 12 - 6,
          ]}
        >
          <sphereGeometry args={[Math.random() * 0.2 + 0.1, 16, 16]} />
          <meshStandardMaterial
            color={`hsl(${Math.random() * 360}, 80%, 60%)`}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ContactBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 70 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <FloatingSpheres />
      </Canvas>
    </div>
  );
}
