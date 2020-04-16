import React from "react";

const Heart = () => {
  return (
    <mesh position={[0, 2, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="#CDC2F5" />
    </mesh>
  );
};

export default Heart;
