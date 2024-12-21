import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { LinearToneMapping, Object3D } from 'three';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

// Custom component to load and rotate the GLB model
function Model() {
  const { scene } = useGLTF('/chess-scene.glb');
  const modelRef = useRef<Object3D>(); // Reference to the model

  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' }); // Check if the device is desktop
  
  // Rotate the model on each frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the speed by changing 0.01
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={isDesktop ? [10, 15, 0] : [0, 15, 0]}
    />
  );
}

const Scene = () => {
  return (
    <Canvas
      style={{ 
        width: '100%', 
        height: '300px', 
        margin: 0,
      }}
      camera={{ position: [44, 44, 44] }}
      gl={{
        toneMapping: LinearToneMapping, // Set linear tone mapping
        toneMappingExposure: 1.5, // Adjust exposure (default is 1)
      }}
    >

    <ambientLight intensity={0.5} />
    <directionalLight position={[10, 10, 10]} intensity={2} />

      {/* 3D Model */}
      <Model />
    </Canvas>
  );
};

export default Scene;
