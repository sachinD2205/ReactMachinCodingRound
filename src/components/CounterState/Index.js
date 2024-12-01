import React, { useState } from "react";
function Index() {
  let [counter, setCounter] = useState(0);
  counter = 5;
  console.log("dd", counter);
  return (
    <>
      <h1>counter {counter}</h1>
      <button
        onClick={() => {
          console.log("11111111", counter);
          counter += 1;
          console.log("22222222", counter);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          console.log("33333333", counter);
          counter -= 1;
          console.log("44444444", counter);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Index;
