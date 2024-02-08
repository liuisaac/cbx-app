import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const TransitionH = () => {
    const [Init, setInit] = useState(false);

    const Rig = () => {
        const refCamera = useRef();
        let zoomConstant = 1.5;

        useFrame((state) => {
            if (state.camera) {
                if (Init) {
                    state.camera.position.y = THREE.MathUtils.damp(
                        state.camera.position.y, //rotation
                        -50, //target point
                        2.0, //jerkiness
                        0.01 //change in time
                    );

                    state.camera.position.z = THREE.MathUtils.damp(
                        state.camera.position.z, //rotation
                        200 * zoomConstant, //target point
                        2.0, //jerkiness
                        0.01 //change in time
                    );

                    state.camera.position.x = THREE.MathUtils.damp(
                        state.camera.position.x, //rotation
                        -310 * zoomConstant, //target point
                        2.0, //jerkiness
                        0.01 //change in time
                    );
                }

                state.camera.lookAt(0, 0, 0);
            }
        });

        return (
            <PerspectiveCamera
                makeDefault
                position={[-3180 * 0.5, 800, 2000 * 0.5]}
                near={1}
                fov={20}
                far={4000}
                zoom={1.2}
                ref={refCamera}
            />
        );
    };

    const Obj = () => {
        const refMesh = useRef();
        const gltf = useLoader(GLTFLoader, "./thelion.glb");

        useFrame(() => {
            if (refMesh.current && Init) {
                // refMesh.current.scale.set(2,2,2)
                // rotating the object
                refMesh.current.rotation.y = THREE.MathUtils.damp(
                    refMesh.current.rotation.y, //rotation
                    -(Math.PI * 2), //target point
                    2.5, //jerkiness
                    0.01 //change in time
                );
            }
        });

        return (
            <group
                position={[0, -375, 0]}
                rotation={[0, -Math.PI, 0]}
                ref={refMesh}
            >
                <primitive object={gltf.scene} />
            </group>
        );
    };

    return (
        <div
            onClick={() => {
                setInit(true);
            }}
        >
            {/* <NavBar/> */}
            <div
                style={{ width: "50vw", height: "50vh", position: "relative" }}
            >
                <Suspense fallback={<div>Loading</div>}>
                    <Canvas
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "fit-content",
                            height: "fit-content",
                        }}
                    >
                        <Rig />
                        <directionalLight
                            color="white"
                            position={[200, -100, -500]}
                            intensity={3}
                        />
                        <directionalLight
                            color="white"
                            position={[-30, 100, 30]}
                            intensity={3}
                        />
                        <ambientLight />
                        <Obj />
                    </Canvas>
                </Suspense>
                {/* <div style={{ position: "absolute", bottom: 10, right: 10, color: "white" }}>CBX</div> */}
            </div>
        </div>
    );
};

export default TransitionH;
