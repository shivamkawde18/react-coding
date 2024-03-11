import React, { useEffect, useState } from "react";
// #reactjs
// In recent reactjs machine coding round, this was asked. Can you solve this ?

// 1. Create a react component that displays a timer with initial value 0.
// 2. There should be two buttons one to start/stop, and other to reset timer.
// 3. Clicking on start will start timer from 0 and increase timer value by 1 for every second and button text should change to "stop".
// 4. Clicking on stop will pause the timer and change button text to "start".
// 5. Now click on start then timer should continue from paused value.
// 6. Clicking on reset will reset the timer to initial value 0.
export const TimerChallenge = () => {
  const [timer, setTimer] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let time;
    if (isStart) {
      time = setInterval(() => {
        setTimer((pre) => pre + 1);
      }, 1000);
    } else {
      clearInterval(time);
    }
    return () => clearInterval(time);
  }, [isStart]);

  return (
    <div>
      ColorChanger
      <h1>{timer}</h1>
      <button
        onClick={() => {
          setIsStart(!isStart);
        }}
      >
        {isStart ? "stop" : "start"}
      </button>
      <button
        onClick={() => {
          setIsStart(false);
          setTimer(0);
        }}
      >
        reset
      </button>
    </div>
  );
};
