import "./styles.css";
import React from "react";

export default function App() {
  const [timer, setTimer] = React.useState(0);
  const [timerId, setTimerId] = React.useState(null);
  const [timerStartFlag, setTimerStartFalag] = React.useState(false);

  const startTimer = () => {
    if (timerStartFlag) {
      clearInterval(timerId);
      setTimerId(null);
      setTimerStartFalag(false);
    } else {
      setTimerStartFalag(true);
    }
  };

  const resetTimer = () => {
    clearInterval(timerId);
    setTimer(0);
    setTimerId(null);
    setTimerStartFalag(false);
  };

  React.useEffect(() => {
    if (timerStartFlag && !timerId) {
      const temp = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setTimerId(temp);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timerStartFlag]);

  return (
    <div>
      <div>
        <h1>{timer}</h1>
      </div>
      <div>
        <button onClick={startTimer}>
          {timerStartFlag ? "Pause" : "Start"}
        </button>
        <button onClick={resetTimer}> Reset</button>
      </div>
    </div>
  );
}
