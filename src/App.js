import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { Canvas } from "react-three-fiber";

import Box from "./Components/Sphere.Component";

import "./App.css";

function App() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  );
}

export default App;
