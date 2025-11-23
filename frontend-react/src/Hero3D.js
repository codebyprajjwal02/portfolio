import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";

// Floating particle component
function Particle({ position, color, size }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
      />
    </mesh>
  );
}

// Floating geometric shapes
function GeometricShape({ position, color, type }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.003;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {type === "box" && <boxGeometry args={[0.5, 0.5, 0.5]} />}
      {type === "torus" && <torusGeometry args={[0.3, 0.1, 16, 32]} />}
      {type === "cone" && <coneGeometry args={[0.3, 0.6, 16]} />}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.2}
        speed={1}
        roughness={0.3}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

// Main 3D scene component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffb86b" />
      
      {/* Central floating sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#60a5fa"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      
      {/* Floating particles */}
      <Particle position={[-2, 1, -1]} color="#60a5fa" size={0.1} />
      <Particle position={[2, -1, 1]} color="#ffb86b" size={0.15} />
      <Particle position={[1, 2, -2]} color="#60a5fa" size={0.12} />
      <Particle position={[-1, -2, 2]} color="#ffb86b" size={0.08} />
      <Particle position={[3, 0, 0]} color="#60a5fa" size={0.1} />
      <Particle position={[-3, 0, 0]} color="#ffb86b" size={0.13} />
      
      {/* Geometric shapes */}
      <GeometricShape position={[-3, 2, -2]} color="#60a5fa" type="box" />
      <GeometricShape position={[3, -2, 2]} color="#ffb86b" type="torus" />
      <GeometricShape position={[0, 3, -3]} color="#60a5fa" type="cone" />
      <GeometricShape position={[0, -3, 3]} color="#ffb86b" type="box" />
      <GeometricShape position={[-2, -2, -3]} color="#60a5fa" type="torus" />
      <GeometricShape position={[2, 2, 3]} color="#ffb86b" type="cone" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function Hero3D({ onClick }) {
  return (
    <div className="hero-3d-container" onClick={onClick}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}