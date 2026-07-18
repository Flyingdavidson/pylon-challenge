"use client";

import { forwardRef } from "react";
import * as THREE from "three";

type AircraftProps = {
  x?: number;
};

const Aircraft = forwardRef<THREE.Group, AircraftProps>(function Aircraft(
  { x = 0 },
  ref
) {
  return (
    <group ref={ref} position={[x, 1.2, 0]} castShadow>
      {/* Fuselage */}
      <mesh castShadow>
        <boxGeometry args={[0.35, 0.35, 1.8]} />
        <meshStandardMaterial color="#d62828" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0, -1.05]} castShadow>
        <coneGeometry args={[0.18, 0.45, 20]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Wings */}
      <mesh position={[0, 0, -0.15]} castShadow>
        <boxGeometry args={[2.3, 0.08, 0.55]} />
        <meshStandardMaterial color="#1d3557" />
      </mesh>

      {/* Tailplane */}
      <mesh position={[0, 0.15, 0.8]} castShadow>
        <boxGeometry args={[0.9, 0.06, 0.28]} />
        <meshStandardMaterial color="#1d3557" />
      </mesh>

      {/* Fin */}
      <mesh position={[0, 0.32, 0.82]} castShadow>
        <boxGeometry args={[0.06, 0.45, 0.2]} />
        <meshStandardMaterial color="#1d3557" />
      </mesh>

      {/* Canopy */}
      <mesh position={[0, 0.18, -0.15]}>
        <sphereGeometry args={[0.17, 16, 16]} />
        <meshStandardMaterial
          color="#90caf9"
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Propeller */}
      <mesh position={[0, 0, -1.28]}>
        <boxGeometry args={[0.05, 0.85, 0.02]} />
        <meshStandardMaterial color="#202020" />
      </mesh>
    </group>
  );
});

export default Aircraft;