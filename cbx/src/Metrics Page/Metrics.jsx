import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const Metrics = () => {
  const [Init, setInit] = useState(false);

  const Rig = () => {
    const refCamera = useRef();
    let zoomConstant = 1.5;

    useFrame((state) => {
      if (state.camera) {
        if (Init) {
          state.camera.position.y = THREE.MathUtils.damp(
            state.camera.position.y,
            -50,
            2.0,
            0.01
          );

          state.camera.position.z = THREE.MathUtils.damp(
            state.camera.position.z,
            200 * zoomConstant,
            2.0,
            0.01
          );

          state.camera.position.x = THREE.MathUtils.damp(
            state.camera.position.x,
            -310 * zoomConstant,
            2.0,
            0.01
          );
        }

        state.camera.lookAt(0, 0, 0);
      }
    });

    return (
      <PerspectiveCamera
        makeDefault
        position={[-2180 * 0.5, 600, 400 * 0.5]}
        near={1}
        fov={19}
        far={3000}
        zoom={1.2}
        ref={refCamera}
      />
    );
  };

  const Obj = () => {
    const refMesh = useRef();
    const gltf = useLoader(GLTFLoader, "./thelion.glb");

    useFrame(({ state }) => {
      if (refMesh.current && Init) {
        refMesh.current.rotation.y = THREE.MathUtils.damp(
          refMesh.current.rotation.y,
          -(Math.PI * 2),
          2.5,
          0.01
        );
      }
    });

    return (
      <group position={[0, -355, 0]} rotation={[0, -Math.PI, 0]} ref={refMesh}>
        <primitive object={gltf.scene} />
      </group>
    );
  };

  const [transition, setTransition] = useState(false);

  useEffect(() => {
    let isScrollingDown;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > (isScrollingDown ? 100 : 200)) {
        // Start the rotation
        setInit(true);
      } else {
        // Stop the rotation
        setInit(false);
      }
    };

    const handleWheel = (event) => {
      isScrollingDown = event.deltaY > 0;
      handleScroll();
    };

    // Attach event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);

    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div style={{ width: "fit-content", height: "fit-content", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap" }}>
    <div style={{ flex: "0 0 100%", height: "50vw", color: 'white', fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "11rem", textAlign: "center", marginLeft: "5rem" }}>
      <p>Founded in 2023, CBX Capital Partners LP is</p>
      <p>Columbia’s first student-run private equity firm</p>
      <p>that seeks to co-invest with partner private</p>
      <p>investment firms on a minority basis. With the</p>
      <p>highest committed capital of any Columbia</p>
      <p>student-run investment vehicle, the firm is</p>
      <p>actively seeking additional investors for our first</p>
      <p>fund — CBX Partners I.</p>
    </div>

    <div style={{ width: "100%", height: "fit-content", overflow: "visible" }}>
      <Canvas style={{ position: "absolute", top: 0, left: 0, marginTop: "120vh", marginLeft: "35vh" }}>
        <Rig />
        <directionalLight color="white" position={[200, -100, -500]} intensity={3} />
        <directionalLight color="white" position={[-30, 100, 30]} intensity={3} />
        <ambientLight />
        <Obj />
      </Canvas>
    </div>
  </div>
  );
}

export default Metrics;
