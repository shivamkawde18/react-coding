import React, { useState, useRef, useEffect } from "react";
// import "./Stopwatch.css"; // Import your CSS file for styling

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timeFun, setTimeFun] = useState(false);
  const [yourTime, setYourTime] = useState([]);

  useEffect(() => {
    let timer = null;

    if (timeFun) {
      timer = setInterval(() => {
        setTime((pre) => pre + 100);
      }, 100);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeFun]);

  return (
    <div>
      <div id="stopwatch">
        <span>{Math.floor((time / 1000 / 60) << 0)}::</span>
        <span>{Math.floor((time / 1000) % 60)}</span>::
        <span>{`00${time}`.slice(-3)}</span>
      </div>
      <button onClick={() => setTimeFun(true)}>Start</button>
      <button
        onClick={() => {
          setTimeFun(false);
          setYourTime([
            ...yourTime,
            `${Math.floor((time / 1000 / 60) << 0)}:${Math.floor(
              (time / 1000) % 60
            )}:${time}`,
          ]);
        }}
      >
        Stop
      </button>
      <button onClick={() => setTime(0)}>Reset</button>

      {yourTime.map((e) => {
        return <div>{e}</div>;
      })}
    </div>
  );
};
