import React, { useState, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { useFrame } from "react-three-fiber";

const Sphere = () => {
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.z += 0.2;
  });
  const [active, setActive] = useState(false);
  const [set, setSet] = useState(false);
  const props = useSpring({
    position: active ? [1, 0, 0] : [0, 1, 0],
    scale: set ? [0.1, 0.1, 0.1] : [0.2, 0.2, 0.2],
  });

  return (
    <a.mesh
      position={props.position}
      ref={meshRef}
      onClick={() => setActive(!active)}
      onPointerOver={() => setSet(true)}
      onPointerOut={() => setSet(false)}
      scale={props.scale}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 15, 15]} />
      <a.meshPhysicalMaterial attach="material" color="red" transparent />
    </a.mesh>
  );
};

export default Sphere;
