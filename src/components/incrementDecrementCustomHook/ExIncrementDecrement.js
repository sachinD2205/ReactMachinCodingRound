import React from "react";
import { useIncrementDecrementCustomHook } from "./IncrementDecrementCustomHookEx";

const ExIncrementDecrement = () => {
  const [count, increment, decrement] = useIncrementDecrementCustomHook(0);

  console.log(increment, decrement);

  return (
    <div>
      <div> Increment Decrement Custom Hook</div>
      <div>{`current count is : ${count}`}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ExIncrementDecrement;
