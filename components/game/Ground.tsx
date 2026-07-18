"use client";

export default function Ground() {
  return (
    <group>
      {/* Grass */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="#4f8f3c" />
      </mesh>

      {/* Runway */}
      <mesh
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.01, -150]}
      >
        <planeGeometry args={[14, 300]} />
        <meshStandardMaterial color="#555555" />
      </mesh>

      {/* Centre line */}
      {Array.from({ length: 40 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.02, -10 - i * 8]}
        >
          <planeGeometry args={[0.4, 3]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}
