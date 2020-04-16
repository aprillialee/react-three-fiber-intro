import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

import Box from "./Components/Sphere.Component";
import Plane from "./Components/Plane.Component";

import Controls from "./Components/Controls.Component";

import "./App.css";

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <fog attach="fog" args={["pink", 5, 15]} />
      <Plane />
      <Controls />
      <Box />
    </Canvas>
  );
}

export default App;
