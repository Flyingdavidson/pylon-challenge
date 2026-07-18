"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

import Aircraft from "./Aircraft";
import CameraRig from "./CameraRig";
import Ground from "./Ground";
import PylonGate from "./PylonGate";

export default function Game() {
  const aircraftRef = useRef<THREE.Group>(null);
  const [x, setX] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") {
        setX((v) => Math.max(v - 0.5, -3));
      }

      if (e.key === "ArrowRight" || e.key === "d") {
        setX((v) => Math.min(v + 0.5, 3));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Canvas shadows>
      <color attach="background" args={["#87CEEB"]} />
      <fog attach="fog" args={["#87CEEB", 40, 140]} />

      <ambientLight intensity={1.8} />

      <directionalLight
        position={[8, 12, 5]}
        intensity={2}
        castShadow
      />

      <CameraRig target={aircraftRef} />

      <Ground />

      <PylonGate />

      <group ref={aircraftRef}>
        <Aircraft x={x} />
      </group>
    </Canvas>
  );
}