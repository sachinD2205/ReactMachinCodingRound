import { useState } from "react";
import TempFetch from "./TempFetch";
import FetchWithApi from "./FetchWithApi";

const AutoRetry = () => {
  const [show, setShow] = useState(false);

  const onButtonChange = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={onButtonChange}> Button InterChange</button>
      {show ? <TempFetch /> : <FetchWithApi />}
    </div>
  );
};

export default AutoRetry;
