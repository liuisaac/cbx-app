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
            <group
                position={[0, -355, 0]}
                rotation={[0, -Math.PI, 0]}
                ref={refMesh}
            >
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
        <div className="w-screen h-screen flex flex-row items-center justify-center overflow-hidden relative">
            <div
                className="relative h-[50vw] z-40 flex w-screen mb-4 sm:mt-44 mt-20 sm:ml-20"
            >
                <div className="absolute sm:w-[50vw] w-[100vw] sm:h-1/2 h-full sm:mt-[30vh] ml-0 flex flex-col sm:justify-start justify-center sm:items-start items-center font-bold text-white text-center text-2xl ">
                    {/* <h1 className="font-light tracking-widest text-5xl mb-4">
                        FOUNDED IN 2023
                    </h1>
                    <p className="font-normal text-left">
                        CBX Partners is a private equity <br></br>
                        firm ran exclusively by Columbia undergraduates.
                        <br></br>
                        CBX Partners makes co-investments in buyout<br></br>
                        transactions alongside partner private investment firms.
                    </p> */}
                    <p className="sm:w-3/4 w-full sm:rounded-none rounded-md bg-opacity-60 sm:p-0 p-4">
                        Founded in 2023, CBX Partners is a private equity{" "}
                        firm ran exclusively by Columbia undergraduates. 
                        CBX Partners makes co-investments in buyout
                        transactions alongside partner private investment firms.
                    </p>
                </div>
            </div>

            <div
                className="absolute w-screen h-screen md:ml-[15vw] ml-[0vw]"
            >
                <Canvas
                    className="mt-[10vh] top-0 left-0 w-full sm:opacity-100 opacity-40"
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
            </div>
        </div>
    );
};

export default Metrics;
