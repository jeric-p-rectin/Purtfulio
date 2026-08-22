import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { LinearToneMapping, Object3D } from 'three';
import { Suspense, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

// Custom component to load and rotate the GLB model
function Model() {
  const { scene } = useGLTF('/chess-scene.glb');
  const modelRef = useRef<Object3D>(null); // Specify the type of the ref

  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' }); // Check if the device is desktop

  // Rotate the model on each frame. Scaled by delta so the speed is the
  // same on a 60Hz and a 120Hz display — previously it spun twice as fast
  // on high-refresh screens.
  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.6 * delta;
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
      dpr={[1, 2]}
      gl={{
        toneMapping: LinearToneMapping, // Set linear tone mapping
        toneMappingExposure: 1.5, // Adjust exposure (default is 1)
        powerPreference: 'high-performance',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={2} />

      {/* 3D Model */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload('/chess-scene.glb');

export default Scene;
