import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Galaxy = () => {
  const galaxy = useGLTF('./need_some_space/scene.gltf')
  return (
    <primitive 
      scale={70}
      position-y={-140}
      position-x={-110}
      rotation-y={0}
      object={galaxy.scene}
    />
  )
}

const GalaxyCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 100,
        position: [4, 30, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 1}
          minPolarAngle={Math.PI / 3}
        />
        <Galaxy />
      </Suspense>
    </Canvas>
  )
}

export default GalaxyCanvas