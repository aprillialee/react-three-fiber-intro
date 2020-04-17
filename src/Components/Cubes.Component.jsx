import React, { useState } from "react";
import { useSpring, a } from "react-spring/three";

const Cubes = () => {
  const [set, setSet] = useState(false);
  const props = useSpring({
    position: set
      ? [(Math.random() - 0.5) * 20, Math.random() * 3, 0]
      : [Math.random() * 5, 0.5, Math.random() * 5],
  });
  return (
    <a.mesh
      position={props.position}
      onPointerOver={() => setSet(true)}
      onPointerOut={() => setSet(false)}
    >
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
      <meshPhysicalMaterial attach="material" color="white" transparent />
    </a.mesh>
  );
};

export default Cubes;
