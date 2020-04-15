import React from "react";
import { Canvas } from "react-three-fiber";

import Box from "./Components/Sphere.Component";

import Controls from "./Components/Controls.Component";

import "./App.css";

function App() {
  return (
    <Canvas>
      <Controls />
      <Box />
    </Canvas>
  );
}

export default App;
