import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Box, Capsule, Plane, SoftShadows } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const THEME_COLORS = ['#A63E2D', '#1A1A1A', '#FFFFFF'];

function Agent({ color, seatPos, meetingPos, speed, offset }: { 
  color: string; 
  seatPos: THREE.Vector3; 
  meetingPos: THREE.Vector3; 
  speed: number; 
  offset: number 
}) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const t = (state.clock.getElapsedTime() * speed + offset) % 20;
      
      // Logic: 0-8 at seat, 8-10 move to meeting, 10-18 at meeting, 18-20 move back to seat
      let targetPos = new THREE.Vector3();
      if (t < 8) {
        targetPos.copy(seatPos);
      } else if (t < 10) {
        const alpha = (t - 8) / 2;
        targetPos.lerpVectors(seatPos, meetingPos, alpha);
      } else if (t < 18) {
        targetPos.copy(meetingPos);
        targetPos.x += Math.sin(t * 5) * 0.1;
        targetPos.z += Math.cos(t * 5) * 0.1;
      } else {
        const alpha = (t - 18) / 2;
        targetPos.lerpVectors(meetingPos, seatPos, alpha);
      }

      meshRef.current.position.lerp(targetPos, 0.1);
      
      if (t >= 8 && t < 10) {
        const dir = new THREE.Vector3().subVectors(meetingPos, seatPos).normalize();
        meshRef.current.rotation.y = Math.atan2(dir.x, dir.z);
      } else if (t >= 18) {
        const dir = new THREE.Vector3().subVectors(seatPos, meetingPos).normalize();
        meshRef.current.rotation.y = Math.atan2(dir.x, dir.z);
      }

      meshRef.current.position.y = 0.5 + Math.sin(t * 4) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      <Capsule args={[0.15, 0.3, 4, 16]} castShadow>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </Capsule>
      <mesh position={[0, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  );
}

function Office() {
  return (
    <group>
      <Plane args={[40, 40]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#FFFFFF" roughness={1} />
      </Plane>
      
      <group position={[6, 0, 0]}>
        <Box args={[0.1, 2, 8]} position={[-4, 1, 0]} receiveShadow>
          <meshStandardMaterial color="#FFFFFF" transparent opacity={0.1} />
        </Box>
        <Box args={[8, 2, 0.1]} position={[0, 1, -4]} receiveShadow>
          <meshStandardMaterial color="#FFFFFF" transparent opacity={0.1} />
        </Box>
        <Box args={[8, 2, 0.1]} position={[0, 1, 4]} receiveShadow>
          <meshStandardMaterial color="#FFFFFF" transparent opacity={0.1} />
        </Box>
        <Box args={[5, 0.1, 3]} position={[0, 0.75, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#1A1A1A" roughness={0.5} />
        </Box>
      </group>

      {[
        [-6, 0, -6], [-6, 0, -3], [-6, 0, 0], [-6, 0, 3], [-6, 0, 6],
        [-3, 0, -6], [-3, 0, -3], [-3, 0, 0], [-3, 0, 3], [-3, 0, 6],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <Box args={[1.5, 0.08, 0.8]} position={[0, 0.75, 0]} castShadow receiveShadow>
            <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
          </Box>
          {[[-0.6, -0.3], [0.6, -0.3], [-0.6, 0.3], [0.6, 0.3]].map((legPos, j) => (
            <Box key={j} args={[0.04, 0.75, 0.04]} position={[legPos[0], 0.375, legPos[1]]} castShadow>
              <meshStandardMaterial color="#1A1A1A" />
            </Box>
          ))}
        </group>
      ))}
      
      <Box args={[40, 3, 0.2]} position={[0, 1.5, -20]} receiveShadow>
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.05} />
      </Box>
      <Box args={[0.2, 3, 40]} position={[-20, 1.5, 0]} receiveShadow>
        <meshStandardMaterial color="#FFFFFF" transparent opacity={0.05} />
      </Box>
    </group>
  );
}

export function HeroScene() {
  const agents = useMemo(() => {
    const seatPositions = [
      [-6, 0.5, -6], [-6, 0.5, -3], [-6, 0.5, 0], [-6, 0.5, 3], [-6, 0.5, 6],
      [-3, 0.5, -6], [-3, 0.5, -3], [-3, 0.5, 0], [-3, 0.5, 3], [-3, 0.5, 6],
    ];
    
    return seatPositions.map((pos, i) => ({
      color: i % 3 === 0 ? '#A63E2D' : (i % 3 === 1 ? '#1A1A1A' : '#FFFFFF'),
      seatPos: new THREE.Vector3(...pos),
      meetingPos: new THREE.Vector3(6 + (Math.random() - 0.5) * 4, 0.5, (Math.random() - 0.5) * 2),
      speed: 0.8 + Math.random() * 0.4,
      offset: Math.random() * 20
    }));
  }, []);

  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas shadows gl={{ antialias: true }}>
        <SoftShadows size={20} samples={10} focus={0} />
        <PerspectiveCamera makeDefault position={[18, 15, 18]} fov={30} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[15, 25, 10]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        >
          <orthographicCamera attach="shadow-camera" args={[-15, 15, 15, -15]} />
        </directionalLight>
        <pointLight position={[-15, 15, -15]} intensity={0.5} color="#FFFFFF" />
        
        <Office />
        {agents.map((agent, i) => (
          <Agent key={i} {...agent} />
        ))}
        
        <fog attach="fog" args={['#ffffff', 20, 50]} />
      </Canvas>
    </div>
  );
}
