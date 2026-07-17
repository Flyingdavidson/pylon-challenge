"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Aircraft() {
  return (
    <mesh position={[0, 0.3, 0]}>
      <boxGeometry args={[0.6, 0.12, 1.4]} />
      <meshStandardMaterial color="#e53935" />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="#4caf50" />
    </mesh>
  );
}

export default function Game() {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 60 }}>
      <color attach="background" args={["#7ec8ff"]} />

      <ambientLight intensity={2} />
      <directionalLight position={[10, 15, 5]} intensity={2} />

      <Ground />
      <Aircraft />

      <OrbitControls enablePan={false} />
    </Canvas>
  );
}