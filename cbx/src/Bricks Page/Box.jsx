import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/box.glb");
  return (
    <group {...props}>
      <mesh {...props}>
        <bufferGeometry {...nodes.Cube.geometry} />
        <meshStandardMaterial {...materials.Material} />
      </mesh>
    </group>
  );
}

// eslint-disable-next-line react/no-unknown-property
useGLTF.preload("/box.glb");