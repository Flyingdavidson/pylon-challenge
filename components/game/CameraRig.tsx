"use client";

import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { RefObject, useRef } from "react";
import * as THREE from "three";

type Props = {
  target: RefObject<THREE.Group | null>;
};

export default function CameraRig({ target }: Props) {
  const camera = useRef<THREE.PerspectiveCamera>(null);

  useFrame((_, delta) => {
    if (!camera.current || !target.current) return;

    const aircraft = target.current;

    const desiredPosition = new THREE.Vector3(
      aircraft.position.x,
      aircraft.position.y + 2.2,
      aircraft.position.z + 7.5
    );

    camera.current.position.lerp(desiredPosition, delta * 4);

    const lookTarget = new THREE.Vector3(
      aircraft.position.x,
      aircraft.position.y + 0.5,
      aircraft.position.z - 10
    );

    camera.current.lookAt(lookTarget);
  });

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault
      position={[0, 3, 8]}
      fov={60}
    />
  );
}