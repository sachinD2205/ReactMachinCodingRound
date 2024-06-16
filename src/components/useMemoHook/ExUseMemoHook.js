import React, { useMemo, useEffect, useState } from "react";

//! useMemo - it is used Memoized value- it will memoized value in between re render reCalculate only when dependence change

// num
const num = new Array(20000000)?.fill({})?.map((_, i) => ({
  index: i + 1,
  number: i + 1,
  isLuckyNumber: i + 1 === 19999999 ? true : false,
}));

const ExUseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [tempState, setTempState] = useState(false);

  // let luckyNumber = num
  //   ?.map((data) => ({ ...data }))
  //   ?.find((data) => data?.isLuckyNumber === true)?.number;

  ///! using useMemo
  const luckyNumber = useMemo(
    () =>
      num
        ?.map((data) => ({ ...data }))
        ?.find((data) => data?.isLuckyNumber === true)?.number,
    [tempState]
  );

  useEffect(() => {
    if (count === 20) {
      setTempState((prev) => !prev);
    }
  }, [count]);

  return (
    <div
      style={{
        padding: "10vh 10vw",
      }}
    >
      <div>{`lucky number is ${luckyNumber}`}</div>
      <div> Example of Use Memo Hook</div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount((pre) => (pre += 1))}>Test</button>
      </div>
    </div>
  );
};

export default ExUseMemoHook;
