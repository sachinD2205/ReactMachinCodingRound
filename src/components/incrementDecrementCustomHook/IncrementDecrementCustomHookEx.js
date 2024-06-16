import { useState } from "react";

export const useIncrementDecrementCustomHook = (defaultCount = 0) => {
  const value = typeof defaultCount == "number" ? defaultCount : 0;

  const [count, setCount] = useState(value);

  console.log(count, "count");

  const increment = () => {
    setCount((prev) => (prev += 1));
  };

  const decrement = () => {
    setCount((prev) => (prev -= 1));
  };

  return [count, increment, decrement];
};
