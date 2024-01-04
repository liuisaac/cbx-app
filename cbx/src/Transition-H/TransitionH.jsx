import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useMousePosition } from "./useMousePosition";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
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

        useFrame(({ state }) => {
            if (refMesh.current && Init) {
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

    // const position = useMousePosition();
    const [transition, setTransition] = useState(false);
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setTransition(true);
    //     }, 3000);
    //     return () => clearTimeout(timeout);
    // }, []);

    const W = () => {
        const refMesh = useRef();
        const store = useRef();
        console.log("hi");

        // Set the reference when the refMesh exists
        useEffect(() => {
            if (refMesh.current) {
                store.current.targetObj = refMesh.current;
            }
        }, []);}

    return (
        <div
        className="w-full h-full relative"
        onClick={() => {
            setInit(true);
           
        }}
        >
            <div className="absolute w-full h-full flex flex-col justify-center items-center z-50"
        
            >
                <div
                    className={`w-[50vh] bg-black rounded-[2rem] bg-opacity-40 backdrop-blur border-2 border-gray-700 flex flex-col items-center transition duration-1000 ease-in-out ${
                        transition
                            ? `opacity-100 translate-y-0`
                            : `opacity-0 translate-y-7`
                    }`}
                >
                    <div className=" w-full h-12 bg-gray-300 rounded-t-[2rem] bg-opacity-20  backdrop-blur flex flex-row justify-center items-center font-light text-2xl tracking-widest">
                        SIGN IN
                    </div>
                    <span className="text-white text-md font-light tracking-widest mt-10">
                        WELCOME TO THE CBX INVESTOR PORTAL
                    </span>
                    <span className="w-4/5 mt-[8vh] tracking-wider">
                        USERNAME:
                    </span>
                    <input
                        type="text"
                        className="h-8 w-4/5 rounded-sm focus:outline-black
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-black bg-opacity-70 border-2 border-gray-700 mt-4"
                        placeholder=" Username:"
                    />
                    <span className="w-4/5 mt-[8vh] tracking-wider">
                        PASSWORD:
                    </span>
                    <input
                        type="password"
                        className="h-8 w-4/5 rounded-sm 
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-black bg-opacity-70 border-2 border-gray-700 mt-4"
                        placeholder="Password:"
                    />

                    <div className="w-4/5 flex flex-row items-center mt-[4vh]">
                        <input
                            type="checkbox"
                            className="h-4 rounded-sm 
                  placeholder:text-gray-500 sm:pl-[14px] pl-[8px] text-white bg-black bg-opacity-70 border-2 border-gray-700 mr-4"
                        />
                        <div className="w-full text-gray-300">
                            <span className="font-light tracking-wider -mr-10">
                                Remember Me
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className=" bg-gray-700 w-4/5 h-[8vh] text-2xl font-light tracking-widest mt-[4vh] rounded-sm hover:bg-gray-600 transition duration-500 ease-in-out"
                    >
                        LOGIN
                    </button>

                    <span className="font-semibold tracking-wide mb-8 mt-4 italic text-black">
                        Forgot{" "}
                        <span className="underline cursor-pointer">
                            Username / Password?
                        </span>
                    </span>
                </div>
            </div>
           
            <Canvas>
                
                {/* camera={{
            position: [(-100 * cam_left_rot), 600, (position.x)],
            fov: 10,
            rotation: [(-0.02 * cam_up_rot), (-0.1 * cam_left_rot), (-0.02 * cam_up_rot)],
            far: 10000
        }} */}
                {/* <fog attach="fog" args={['lightpink', 60, 100]} /> */}
                <Rig />
                {/* <fog attach="fog" color="hotpink" near={1} far={10} /> */}
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

                {/* <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={5} />
        </EffectComposer> */}

                <Obj />
            </Canvas>
            
            
            <div>CBX</div>
        </div>
    );
};

export default TransitionH;
