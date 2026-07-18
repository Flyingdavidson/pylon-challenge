"use client";

export default function PylonGate() {
  return (
    <group position={[0, 0, -120]}>
      {/* Left Pylon */}
      <mesh position={[-3, 2, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.28, 4, 20]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Right Pylon */}
      <mesh position={[3, 2, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.28, 4, 20]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Top markers */}
      <mesh position={[-3, 4.2, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ff3b30" />
      </mesh>

      <mesh position={[3, 4.2, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ff3b30" />
      </mesh>

      {/* Invisible gate opening (for future collision detection) */}
      <mesh position={[0, 2, 0]} visible={false}>
        <boxGeometry args={[6, 4, 0.5]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  );
}