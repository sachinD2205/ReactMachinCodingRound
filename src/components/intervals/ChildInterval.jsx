import react, { useEffect, useState ,useRef } from "react";

const ChildInterval = () => {
  const [count, setCount] = useState(10);
  const intervalRef = useRef(null);


  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("Child Interval Rendered");
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <h3>Child Interval Count: {count}</h3>
    </div>
  );
};

export default ChildInterval;
