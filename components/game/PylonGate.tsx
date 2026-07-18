"use client";

export default function PylonGate() {
  return (
    <group position={[0, 0, -40]}>
      {/* Left Pylon */}
      <mesh position={[-2.5, 1.2, 0]}>
        <cylinderGeometry args={[0.22, 0.35, 2.4, 24]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Right Pylon */}
      <mesh position={[2.5, 1.2, 0]}>
        <cylinderGeometry args={[0.22, 0.35, 2.4, 24]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Left Marker */}
      <mesh position={[-2.5, 2.5, 0]}>
        <sphereGeometry args={[0.28, 20, 20]} />
        <meshStandardMaterial color="#ff3b30" />
      </mesh>

      {/* Right Marker */}
      <mesh position={[2.5, 2.5, 0]}>
        <sphereGeometry args={[0.28, 20, 20]} />
        <meshStandardMaterial color="#ff3b30" />
      </mesh>
    </group>
  );
}