import React, { useRef } from "react";
import { Canvas, useThree, extend, useFrame } from "react-three-fiber";

import * as THREE from "three";

import Box from "./Components/Box.Component";
import Plane from "./Components/Plane.Component";
import Cubes from "./Components/Cubes.Component";
import Sphere from "./Components/Sphere.Component";
import More from "./Components/More.Component";

import Controls from "./Components/Controls.Component";

import "./App.css";

function App() {
  return (
    <Canvas camera={{ rotation: [-Math.PI / 9, 3, 0] }}>
      <fog attach="fog" args={["#041830", 5, 15]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[0, 5, 10]} penumbra={0.5} castShadow />
      <Plane />
      <Controls />
      <Sphere></Sphere>
      <Cubes></Cubes>
    </Canvas>
  );
}

export default App;
