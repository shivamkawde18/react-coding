import React, { useEffect, useState } from "react";

export const ProgressBar = () => {
  const [value, setValue] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [stop, setStop] = useState(false);
  console.log(value);
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
    } else clearInterval(timer);

    return () => clearInterval(timer);
  }, [value, stop]);

  return (
    <div>
      <div
    
        style={{
          height: 30,
          borderRadius: 50,
          backgroundColor: "#0000ff",
          textAlign: "center",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          width: 200,
        
        }}
      >
        <span
          style={{
            textAlign: "center",
            width: 200,
            color: value < 50 ? "white" : "black",
          }}
        >
          {value}%
        </span>
        <div
          style={{
            height: 30,
            borderRadius: 50,
            width: value * 2,
            // width:33,
            backgroundColor: "green",
            textAlign: "center",
            position: "absolute",
            top: 0,
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
     {stop?"start":"stop"}
      </button>
    </div>
  );
};
