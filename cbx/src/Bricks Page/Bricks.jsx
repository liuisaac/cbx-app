import React, {
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    useEffect,
} from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../scroll.animation";


gsap.registerPlugin(ScrollTrigger);

const Bricks = forwardRef((props, ref) => {
    const canvasRef = useRef(null);
    const [viewerRef, setViewerRef] = useState(null);
    const [targetRef, setTargetRef] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [positionRef, setPositionRef] = useState(null);
    const canvasContainerRef = useRef(null);

    useImperativeHandle(ref, () => ({
        triggerPreview() {
            canvasContainerRef.current.style.pointerEvents = "all";
            props.contentRef.current.style.opacity = "0";
            gsap.to(positionRef, {
                x: 10.583887969,
                y: 0.2639599244,
                z: 0.0083473267,
                duration: 5,
                onUpdate: () => {
                    viewerRef.setDirty();
                    cameraRef.positionTargetUpdated(true);
                },
            });
            gsap.to(targetRef, {
                x: 10.583887969,
                y: 0.2639599244,
                z: 0.0083473267,
                duration: 5,
            });

            viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
        },
    }));

    const memoizedScrollAnimation = useCallback(
        (position, target, onUpdate) => {
            if (position && target && onUpdate) {
                scrollAnimation(position, target, onUpdate);
            }
        },
        []
    );

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        });

        setViewerRef(viewer);

        const manager = await viewer.addPlugin(AssetManagerPlugin);

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        setCameraRef(camera);
        setPositionRef(position);
        setTargetRef(target);

        await viewer.addPlugin(GBufferPlugin);
        await viewer.addPlugin(new ProgressivePlugin(32));
        await viewer.addPlugin(new TonemapPlugin(true));
        await viewer.addPlugin(GammaCorrectionPlugin);
        await viewer.addPlugin(BloomPlugin);
        await viewer.addPlugin(SSRPlugin);
        await viewer.addPlugin(SSAOPlugin);

        viewer.renderer.refreshPipeline();

        await manager.addFromPath("./brick.glb");

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        window.scrollTo(0, 0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        };

        viewer.addEventListener("preFrame", () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });

        memoizedScrollAnimation(position, target, onUpdate);
    }, []);

    useEffect(() => {
        setupViewer();
    }, [setupViewer]);

    return (
        <div id="brick" style={{ width: "100vw", height: "100vh", position: "relative" }}>
      
            <div style={{ display: "flex" }}>
                
                <div style={{ flex: 1, color: "white", padding: "0 20px" }}>
                    <h1 style={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "6rem",  marginLeft:"3rem" }}>
                        Built from the ground up to be different.
                    </h1>
                    <p style={{
                        fontSize: "1.1rem",
                        lineHeight: "1.5",
                        textAlign: "left",
                        marginLeft:"3rem",
                        marginTop:"2rem"
                    }}>
                        CBX Partners&apos; ethos is two-fold: deliver top quartile alpha for its investors and provide select Columbia undergraduates with the investing 
                        intuition and competitive edge needed to dominate careers at the world’s leading investment and strategic advisory firms.
                        <br /><br />
                        We’re not a club. We don’t exist for resume padding. We’re a place where people who are not cut from the average cloth can go to build momentum.
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                    </p>

                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
                    </div>
                </div>
            </div>
        </div>

    );
});
Bricks.displayName = 'Bricks';

export default Bricks;
