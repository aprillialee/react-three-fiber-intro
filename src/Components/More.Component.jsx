import React, { useState } from "react";

const More = () => {
  return (
    <mesh position={[1, 1, 1]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshPhysicalMaterial attach="material" color="red" transparent />
    </mesh>
  );
};

export default More;
