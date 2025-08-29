import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';

interface FloatingOrbProps {
  position: [number, number, number];
  color: string;
  label: string;
  size?: number;
}

export function FloatingOrb({ position, color, label, size = 0.5 }: FloatingOrbProps) {
  const orbRef = useRef<any>();
  const textRef = useRef<any>();
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      orbRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      orbRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
    
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      <Sphere ref={orbRef} args={[size, 32, 32]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      
      <Text
        ref={textRef}
        position={[0, -size - 0.5, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}
