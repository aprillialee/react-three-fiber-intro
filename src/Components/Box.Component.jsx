import React, { useState } from "react";
import { useSpring, a } from "react-spring/three";

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "palevioletred" : "pink",
  });

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <a.meshPhysicalMaterial
        attach="material"
        color={props.color}
        transparent
      />
    </a.mesh>
  );
};

export default Box;
