import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numberOfCakes = useSelector((state) => state.numberOfCakes);
  const buyCakeDispatch = useDispatch();
  return (
    <div>
      <h2>number of cakes : {numberOfCakes}</h2>
      <button
        onClick={() => {
          buyCakeDispatch(buyCake());
        }}
      >
        buyCake
      </button>
    </div>
  );
}

export default HooksCakeContainer;
