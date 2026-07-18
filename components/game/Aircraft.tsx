"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  x: number;
};

export default function Aircraft({ x }: Props) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      x,
      delta * 8
    );

    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      -x * 0.35,
      delta * 8
    );

    ref.current.position.y = 0.3 + Math.abs(ref.current.rotation.z) * 0.08;
  });

  return (
    <group ref={ref} position={[0, 0.3, 0]}>
      {/* Fuselage */}
      <mesh>
        <boxGeometry args={[0.28, 0.14, 1.3]} />
        <meshStandardMaterial color="#d62828" />
      </mesh>

      {/* Wings */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.4, 0.04, 0.25]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.18, -0.55]}>
        <boxGeometry args={[0.06, 0.28, 0.18]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0, 0.72]}>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial color="#202020" />
      </mesh>
    </group>
  );
}