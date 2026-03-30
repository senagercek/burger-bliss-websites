import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BurgerModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  // Procedural 3D burger
  return (
    <group ref={groupRef} scale={1.4} position={[0, -0.3, 0]}>
      {/* Top bun */}
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[1.1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#D4850A" roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Sesame seeds */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 0.5 + Math.random() * 0.4;
        return (
          <mesh key={i} position={[Math.cos(angle) * r, 1.05 + Math.random() * 0.15, Math.sin(angle) * r]} rotation={[Math.random(), Math.random(), Math.random()]}>
            <capsuleGeometry args={[0.03, 0.06, 4, 8]} />
            <meshStandardMaterial color="#F5E6C8" roughness={0.8} />
          </mesh>
        );
      })}
      {/* Lettuce */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[1.2, 1.15, 0.15, 32]} />
        <meshStandardMaterial color="#4CAF50" roughness={0.7} />
      </mesh>
      {/* Tomato */}
      <mesh position={[0, 0.45, 0]}>
        <cylinderGeometry args={[1.05, 1.05, 0.12, 32]} />
        <meshStandardMaterial color="#E53935" roughness={0.5} />
      </mesh>
      {/* Cheese */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[1.8, 0.08, 1.8]} />
        <meshStandardMaterial color="#FFC107" roughness={0.4} metalness={0.1} />
      </mesh>
      {/* Patty */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[1.0, 1.0, 0.25, 32]} />
        <meshStandardMaterial color="#5D2906" roughness={0.8} metalness={0.05} />
      </mesh>
      {/* Bottom bun */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[1.1, 1.05, 0.35, 32]} />
        <meshStandardMaterial color="#D4850A" roughness={0.6} metalness={0.1} />
      </mesh>
    </group>
  );
};

export default BurgerModel;
