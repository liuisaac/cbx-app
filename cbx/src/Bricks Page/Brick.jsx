import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BufferAttribute, BufferGeometry, Vector3 } from "three";
import { Model } from "./Box";
// Sigmoid function for smooth interpolation
function sigmoid(t) {
    return 1 / (1 + Math.exp(-t * 10));
}

// Interpolate between two points
function interpolate(start, end, t) {
    return start.clone().lerp(end, t);
}

const Brick = ({ evec, delay, dist, init }) => {
    const myMesh = useRef();

    // Define start and end points
    const startPoint = new Vector3(evec[0], (evec[1] + 1) * dist, evec[2]);
    const endPoint = new Vector3(evec[0], evec[1], evec[2]);

    const [timer, setTimer] = useState(0);

    useFrame(
        ({ clock }) => {
            if (myMesh.current && init) {
                const mesh = myMesh.current;
                const ntimer = clock.getElapsedTime() - timer;
                const t = sigmoid(Math.max(0, ntimer - delay) / 4);

                // Interpolate position using sigmoid function
                const position = interpolate(startPoint, endPoint, t);

                // Update mesh position
                mesh.position.copy(position);
            } else {
                // Reset the timer when init is false
                setTimer(clock.getElapsedTime());
            }
        },
        [init, timer, delay, startPoint, endPoint]
    );

    return (
        <group ref={myMesh} position={startPoint}>
            <Model />
        </group>
    );
};

export default Brick;
