"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Aircraft() {
  const aircraft = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!aircraft.current) return;

    const t = clock.getElapsedTime();

    // Forward flight
    aircraft.current.position.z = -t * 8;

    // Gentle banking
    aircraft.current.rotation.z = Math.sin(t * 2) * 0.25;

    // Small vertical movement
    aircraft.current.position.y = 0.3 + Math.sin(t * 3) * 0.05;
  });

  return (
    <mesh ref={aircraft}>
      <boxGeometry args={[0.6, 0.12, 1.4]} />
      <meshStandardMaterial color="#d62828" />
    </mesh>
  );
}

function CameraRig() {
  const camera = useRef<THREE.PerspectiveCamera>(null);

  useFrame(({ clock }) => {
    if (!camera.current) return;

    const z = -clock.getElapsedTime() * 8;

    camera.current.position.set(0, 2, z + 6);
    camera.current.lookAt(0, 0.3, z);
  });

  return <PerspectiveCamera ref={camera} makeDefault fov={60} />;
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -200]}>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color="#3b7d3b" />
    </mesh>
  );
}

function Pylon() {
  return (
    <mesh position={[0, 1.2, -25]}>
      <cylinderGeometry args={[0.2, 0.35, 2.4, 20]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

export default function Game() {
  return (
    <Canvas shadows>
      <CameraRig />

      <color attach="background" args={["#87ceeb"]} />

      <fog attach="fog" args={["#87ceeb", 40, 140]} />

      <ambientLight intensity={1.8} />

      <directionalLight
        position={[8, 12, 5]}
        intensity={2}
        castShadow
      />

      <Ground />

      <Pylon />

      <Aircraft />
    </Canvas>
  );
}
