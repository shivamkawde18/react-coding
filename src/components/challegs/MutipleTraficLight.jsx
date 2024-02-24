import { useState, useEffect } from "react";

export const MultipleTraficLight = () => {
  const order = {
    red: {
      time: 7000,
      next: "yellow",
    },
    yellow: {
      time: 5000,
      next: "green",
    },
    green: {
      time: 7000,
      next: "red",
    },
  };

  const [currentLight, setCurrent] = useState("red");

  const [lightDuration, setLightDuration] = useState(order[currentLight].time);
  const [currentLight2, setCurrent2] = useState(order[currentLight].next);

  const [lightDuration2, setLightDuration2] = useState(
    order[currentLight2].time,
  );
  useEffect(() => {
    let timer;

    if (lightDuration !== 0) {
      timer = setInterval(() => {
        setLightDuration((pre) => pre - 1000);
      }, 1000);
    } else {
      clearInterval(timer);
      setCurrent(order[currentLight].next);
      setCurrent2(order[currentLight2].next);

      setLightDuration(order[order[currentLight].next].time);
      setLightDuration2(order[order[currentLight2].next].time);
    }

    return () => clearInterval(timer);
  }, [currentLight, lightDuration]);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            background: "black",
            width: "fit-content",
            padding: 50,
          }}
        >
          {Object.keys(order).map((item, i) => {
            return (
              <div
                key={i + item}
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: currentLight === item ? item : "gray",
                  borderRadius: 50,
                }}
              ></div>
            );
          })}
          {Object.keys(order).map((item, i) => {
            return (
              <div
                key={i + item}
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: currentLight2 === item ? item : "gray",
                  borderRadius: 50,
                }}
              ></div>
            );
          })}
          hiii
          {/* <div
          style={{
            height: 50,
            width: 50,
            backgroundColor: "yellow",
            borderRadius: 50,
          }}
        ></div>
        <div
          style={{
            height: 50,
            width: 50,
            backgroundColor: "green",
            borderRadius: 50,
          }}
        ></div> */}
        </div>
      </div>
    </div>
  );
};
