"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

import Aircraft from "./Aircraft";
import CameraRig from "./CameraRig";
import Ground from "./Ground";
import PylonGate from "./PylonGate";

function FlightController({
    aircraft,
    steer,
  }: {
    aircraft: React.RefObject<THREE.Group | null>;
    steer: number;
  }) {
    useFrame((_, delta) => {
      const obj = aircraft.current;
  
      if (!obj) return;
  
      obj.translateZ(-18 * delta);
  
      obj.position.setX(
        THREE.MathUtils.lerp(obj.position.x, steer * 3, delta * 4)
      );
  
      obj.rotation.set(
        obj.rotation.x,
        obj.rotation.y,
        THREE.MathUtils.lerp(obj.rotation.z, -steer * 0.6, delta * 6)
      );
    });
  
    return null;
  }

export default function Game() {
  const aircraftRef = useRef<THREE.Group>(null);

  const [steer, setSteer] = useState(0);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") setSteer(-1);
      if (e.key === "ArrowRight" || e.key === "d") setSteer(1);
    };

    const up = () => setSteer(0);

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      onPointerDown={(e) => {
        if (e.clientX < window.innerWidth / 2) setSteer(-1);
        else setSteer(1);
      }}
      onPointerUp={() => setSteer(0)}
      onPointerLeave={() => setSteer(0)}
    >
      <Canvas shadows camera={{ position: [0, 2.5, 8], fov: 60 }}>
        <color attach="background" args={["#8ed6ff"]} />
        <fog attach="fog" args={["#8ed6ff", 40, 180]} />

        <ambientLight intensity={2} />

        <directionalLight
          position={[10, 20, 10]}
          intensity={2.5}
          castShadow
        />

        <Ground />

        <PylonGate />

        <group ref={aircraftRef}>
          <Aircraft x={0} />
        </group>

        <FlightController aircraft={aircraftRef} steer={steer} />

        <CameraRig target={aircraftRef} />
      </Canvas>
    </div>
  );
}