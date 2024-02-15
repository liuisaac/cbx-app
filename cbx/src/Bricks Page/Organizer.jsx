import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, PresentationControls } from "@react-three/drei";

import Brick from "./Brick.jsx";
import { useEffect, useRef, useState } from "react";

function Organizer() {
    const pointDist = 2.5;
    const startDist = 50;
    const [Init, setInit] = useState(false);

    useEffect(() => {
        let isScrollingDown;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > (isScrollingDown ? 1000 : 1100)) {
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

    const Rig = () => {
        const refCamera = useRef();
        // let zoomConstant = 1.5;

        useFrame((state) => {
            if (state.camera) {
                state.camera.lookAt(0, 0, 0);
            }
        });

        return (
            <PerspectiveCamera
                makeDefault
                position={[50, 50, 50]}
                near={1}
                fov={20}
                far={4000}
                zoom={1.5}
                ref={refCamera}
            />
        );
    };

    return (
        <div className="w-screen h-[120vh] bg-black relative overflow-hidden flex flex-col items-center justify-center">
            <div className="text-white h-screen w-screen absolute z-10 flex flex-col items-center justify-center">
                <div className="w-1/3 ml-[40vw] text-xl">
                    <h1 className="font-bold mb-4 text-2xl">
                        Built from the ground up to be different.
                    </h1>
                    <p>
                        CBX Partners&apos; ethos is two-fold: deliver top
                        quartile alpha for its investors and provide select
                        Columbia undergraduates with the investing intuition and
                        competitive edge needed to dominate careers at the
                        world’s leading investment and strategic advisory firms.
                        <br />
                        <br />
                        We’re not a club. We don’t exist for resume padding.
                        We’re a place where people who are not cut from the
                        average cloth can go to build momentum.
                    </p>
                </div>
            </div>

            <Canvas className="pointer-events-none absolute top-0 left-0 w-screen h-screen mr-[40vw]">
                <directionalLight position={[100, 0, 0]} intensity={2} />
                <directionalLight position={[0, 100, 0]} intensity={5} />
                <directionalLight position={[0, 0, 100]} intensity={0.1} />
                <Rig />
                <PresentationControls>
                    <Brick
                        evec={[0, 0, 0]}
                        dist={startDist}
                        delay={0.2}
                        init={Init}
                    />
                    <Brick
                        evec={[0, -pointDist, 0]}
                        dist={startDist}
                        delay={0.25}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, 0, 0]}
                        dist={startDist}
                        delay={0.3}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, -pointDist, 0]}
                        dist={startDist}
                        delay={0.35}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, 0, -pointDist]}
                        dist={startDist}
                        delay={0.4}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, pointDist, -pointDist]}
                        dist={startDist}
                        delay={0.45}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, -pointDist, -pointDist]}
                        dist={startDist}
                        delay={0.5}
                        init={Init}
                    />
                    <Brick
                        evec={[0, 0, -pointDist]}
                        dist={startDist}
                        delay={0.55}
                        init={Init}
                    />
                    <Brick
                        evec={[0, pointDist, -pointDist]}
                        dist={startDist}
                        delay={0.6}
                        init={Init}
                    />
                    <Brick
                        evec={[0, -pointDist, -pointDist]}
                        dist={startDist}
                        delay={0.65}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, 0, pointDist]}
                        dist={startDist}
                        delay={0.7}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, 0, -pointDist]}
                        dist={startDist}
                        delay={0.75}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, pointDist, 0]}
                        dist={startDist}
                        delay={0.8}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, -pointDist, 0]}
                        dist={startDist}
                        delay={0.85}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, pointDist, -pointDist]}
                        dist={startDist}
                        delay={0.9}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, -pointDist, -pointDist]}
                        dist={startDist}
                        delay={0.95}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, pointDist, pointDist]}
                        dist={startDist}
                        delay={1.0}
                        init={Init}
                    />
                    <Brick
                        evec={[-pointDist, -pointDist, pointDist]}
                        dist={startDist}
                        delay={1.05}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, 0, 0]}
                        dist={startDist}
                        delay={1.1}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, pointDist, 0]}
                        dist={startDist}
                        delay={1.15}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, pointDist, pointDist]}
                        dist={startDist}
                        delay={1.2}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, -pointDist, 0]}
                        dist={startDist}
                        delay={1.25}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, -pointDist, pointDist]}
                        dist={startDist}
                        delay={1.3}
                        init={Init}
                    />
                    <Brick
                        evec={[0, pointDist, 0]}
                        dist={startDist}
                        delay={1.35}
                        init={Init}
                    />
                    <Brick
                        evec={[0, pointDist, pointDist]}
                        dist={startDist}
                        delay={1.4}
                        init={Init}
                    />
                    <Brick
                        evec={[0, -pointDist, 0]}
                        dist={startDist}
                        delay={1.45}
                        init={Init}
                    />
                    <Brick
                        evec={[0, -pointDist, pointDist]}
                        dist={startDist}
                        delay={1.5}
                        init={Init}
                    />
                    <Brick
                        evec={[0, 0, pointDist]}
                        dist={startDist}
                        delay={1.55}
                        init={Init}
                    />
                    <Brick
                        evec={[pointDist, 0, pointDist]}
                        dist={startDist}
                        delay={1.6}
                        init={Init}
                    />
                </PresentationControls>
            </Canvas>
        </div>
    );
}

export default Organizer;
