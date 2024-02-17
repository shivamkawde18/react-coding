import React, { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [value, setValue] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    let timer;
    if (stop) {
      clearInterval(timer);
      return;
    }
    if (value >= 0 && value < 100) {
      timer = setInterval(() => {
        setValue((val) => val + speed);
      }, 1000);
    } else {
      clearInterval(timer);
      setValue(100);
    }

    return () => clearInterval(timer);
  }, [value, stop]);

  return (
    <div>
      <div
        style={{
          height: 30,
          borderRadius: 50,
          backgroundColor: "#979595",
          textAlign: "center",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          width: 200,
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: 200,
            color: value < 50 ? "black" : "white",
          }}
        >
          {value}%
        </div>
        <div
          style={{
            height: 30,
            borderRadius: 50,
            width: value * 2,
            // width:33,
            backgroundColor: "blue",
            textAlign: "center",
            position: "absolute",
            top: 0,
            opacity: 0.5,
          }}
        ></div>
      </div>
      <input
        type="range"
        max={10}
        defaultValue={1}
        onChange={(e) => {
          console.log();
          setSpeed(Number(e.currentTarget.value));
        }}
      />
      speed:{speed}
      <button
        onClick={() => {
          setStop(!stop);
        }}
      >
        {stop ? "start" : "stop"}
      </button>
    </div>
  );
};
