// Create a simple functional component that displays a message passed as a prop.
import React from "react";

// const Test = () => {
//   return <div>Test</div>;
// };

// export default Test;

const DisplayMessage = ({ message }) => {
  return (
    <>
      <div>{message}</div>
    </>
  );
};
export default DisplayMessage;
