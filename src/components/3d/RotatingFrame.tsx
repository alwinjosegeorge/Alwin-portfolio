import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, useTexture } from '@react-three/drei';

interface RotatingFrameProps {
  imageUrl: string;
  position?: [number, number, number];
  scale?: number;
}

export function RotatingFrame({ imageUrl, position = [0, 0, 0], scale = 1 }: RotatingFrameProps) {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group position={position} scale={scale}>
      <RoundedBox ref={meshRef} args={[2, 2.5, 0.1]} radius={0.1}>
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.8}
          roughness={0.2}
          emissive="#00d4ff"
          emissiveIntensity={0.1}
        />
      </RoundedBox>
      
      {/* Inner image placeholder */}
      <RoundedBox position={[0, 0, 0.06]} args={[1.7, 2.2, 0.02]} radius={0.05}>
        <meshStandardMaterial 
          color="#0a0a0a"
          emissive="#00d4ff"
          emissiveIntensity={0.05}
        />
      </RoundedBox>
    </group>
  );
}
