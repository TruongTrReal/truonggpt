import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./ungarisches_steppenrind/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={.15} groundColor="green" />
      <pointLight intensity={1} />
      <spotLight
        position={[20, 100, 100]}
        angle={1.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        scale={isMobile ? 0.75 : .75}
        position={isMobile ? [3, -5, -3] : [4.5, -6, -3.5]}
        rotation={[0, 0.2, 0]}
        object={computer.scene}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const updateRotation = (event) => {
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const sensitivity = 0.1;

    const newRotationX = deltaY * sensitivity;
    const newRotationY = deltaX * sensitivity;

    setRotation({ x: newRotationX, y: newRotationY });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    window.addEventListener("mousemove", updateRotation);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener("mousemove", updateRotation);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [30, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        {/* Apply the rotation effect to the Computers component */}
        <group
          rotation={[rotation.x * 0.005, rotation.y * 0.005, 0]}
        >
          <Computers isMobile={isMobile} />
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
