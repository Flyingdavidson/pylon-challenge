"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import * as THREE from "three";

type Props = {
  target: RefObject<THREE.Group | null>;
};

export default function CameraRig({ target }: Props) {
  const camera = useRef<THREE.PerspectiveCamera>(null);

  useFrame((_, delta) => {
    if (!camera.current || !target.current) return;

    const targetPos = target.current.position;

    const desiredPosition = new THREE.Vector3(
      targetPos.x,
      targetPos.y + 2,
      targetPos.z + 6
    );

    camera.current.position.lerp(desiredPosition, delta * 4);

    camera.current.lookAt(
      targetPos.x,
      targetPos.y + 0.3,
      targetPos.z - 8
    );
  });

  return (
    <PerspectiveCamera
      ref={camera}
      makeDefault
      fov={60}
    />
  );
}