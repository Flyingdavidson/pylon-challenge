"use client";

export default function Ground() {
  return (
    <group>
      {/* Grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -250]}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="#3f8f3f" />
      </mesh>

      {/* Runway */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, -250]}>
        <planeGeometry args={[8, 500]} />
        <meshStandardMaterial color="#505050" />
      </mesh>

      {/* Centre Line */}
      {Array.from({ length: 35 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.48, -8 - i * 14]}
        >
          <planeGeometry args={[0.3, 6]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
}