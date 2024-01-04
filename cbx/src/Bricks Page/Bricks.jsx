import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { TweenMax, Power4 } from 'gsap';

const BrickAnimation = ({ isAnimating }) => {
  const refMesh = useRef();
  const gltf = useLoader(GLTFLoader, "./brick.glb");

  useFrame(({ camera }) => {
    if (refMesh.current && isAnimating) {
      refMesh.current.rotation.y += 0.01;

      
      if (isAnimating) {
        camera.position.y += 0.1; 
      } else {
        camera.position.y -= 0.1; 
      }
    }
  });

  return (
    <group position={[0, 0, 0]} ref={refMesh}>
      <primitive object={gltf.scene} />
    </group>
  );
};

const BricksTransition = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const bricksRef = useRef([]);

  useEffect(() => {
    let scene;
    const handleScroll = (event) => {
      if (!isAnimating) {
        setIsAnimating(true);
        const bricks = event.deltaY > 0 ? bricksRef.current : bricksRef.current.slice().reverse();
        bricks.forEach((brick, index) => {
          TweenMax.to(brick.position, 1, { y: event.deltaY > 0 ? 0 : -10 * (index + 1), ease: Power4.easeInOut });
        });
      }
    };

    const init = () => {
      scene = new THREE.Scene();

 
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Ambient light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Directional light
      directionalLight.position.set(0, 10, 0); // Position the light
      scene.add(ambientLight, directionalLight);

   
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5; // Play with this value to change the camera's initial distance from the scene

     
      for (let i = 0; i < 25; i++) {
        const brick = new THREE.Mesh(
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({ color: 0xffffff, emissive: 0xffffff })
        );
        brick.position.set(
          (i % 5 - 2) * 1.5,
          Math.floor(i / 5 - 2) * 1.5,
          -10 + Math.random() * 10
        );
        bricksRef.current.push(brick);
        scene.add(brick);
      }

      window.addEventListener('wheel', handleScroll);

      return () => {
        window.removeEventListener('wheel', handleScroll);
      };
    };

    init();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div style={{ flex: 1 }}>
        {/* Your left content */}
      </div>
      <div style={{ flex: 1 }}>
        <Canvas>
          {/* Placeholders */}
          <BrickAnimation isAnimating={isAnimating} />
        </Canvas>
      </div>
    </div>
  );
};

export default BricksTransition;
