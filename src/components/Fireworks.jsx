import React from "react";
import { useFireworks } from "../hooks/useFireworks";
import Firework from "./Firework";

const Fireworks = () => {
  const fireworks = useFireworks((state) => state.fireworks);

  return (
    <>
      {fireworks.map((firework) => (
        <Firework key={firework.id} {...firework} />
      ))}
    </>
  );
};

export default Fireworks;
