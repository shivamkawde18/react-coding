import React, { useEffect, useState } from "react";

export const TraficLight = () => {
  //   const [red, setRed] = useState(true);
  //   const [yellow, setYellow] = useState(false);
  //   const [green, setGreen] = useState(false);
  //   const [timer, setTimer] = useState(5);
  //   setTimeout(() => {
  //     if (red) {
  //       setRed(false);
  //       setGreen(true);
  //     }
  //     if (green) {
  //       setGreen(false);
  //       setYellow(true);
  //     }
  //     if (yellow) {
  //       setYellow(false);
  //       setRed(true);
  //     }
  //   }, 3000);

  //new logic

  const mainObj = {
    red: {
      id: 1,
      duration: 5000,
      next: "green",
    },
    yellow: {
      id: 2,
      duration: 2000,
      next: "red",
    },
    green: {
      id: 3,
      duration: 3000,
      next: "yellow",
    },
  };

  const [currentLight, setCurrentLight] = useState("red");

  const [currentTimeDuration, setCurrentTimeDuration] = useState(
    mainObj[currentLight].duration
  );

  useEffect(() => {
    console.log(mainObj[mainObj[currentLight].next].duration);
    let timer;

    if (currentTimeDuration <= 0) {
      clearInterval(timer);

      setCurrentLight(mainObj[currentLight].next);
      setCurrentTimeDuration(
        Number(mainObj[mainObj[currentLight].next].duration)
      );
    } else {
      timer = setInterval(() => {
        setCurrentTimeDuration((prevDuration) => prevDuration - 1000);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentTimeDuration, currentLight]);

  // const config = {
  //     red: {
  //       id: 1,
  //       duration: 5000,
  //       next: 'green',
  //     },
  //     yellow: {
  //       id: 2,
  //       duration: 2000,
  //       next: 'red',
  //     },
  //     green: {
  //       id: 3,
  //       duration: 3000,
  //       next: 'yellow',
  //     },
  //   };
  // const [currentActiveLight, setCurrentActiveLight] = useState('red');
  //   const [currentDuration, setCurrentDuration] = useState(config[currentActiveLight].duration);

  //   useEffect(() => {
  //     let timerId;
  //     if (currentDuration <= 0) {
  //       clearInterval(timerId);
  //       setCurrentActiveLight(config[currentActiveLight].next);
  //       setCurrentDuration(Number(config[config[currentActiveLight].next].duration));
  //     } else {
  //       timerId = setInterval(() => {
  //         setCurrentDuration((prevDuration) => prevDuration - 1000);
  //       }, 1000);
  //     }
  //     return () => clearInterval(timerId);
  //   }, [currentDuration, currentActiveLight]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          backgroundColor: "black",
          height: "fit-content",
          width: "fit-content",
          padding: 50,
        }}
      >
        {/* <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: red ? "red" : "white",
            borderRadius: "100%",
          }}
        ></div>

        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: yellow ? "yellow" : "white",
            borderRadius: "100%",
          }}
        ></div>
        <div
          style={{
            height: 100,
            width: 100,
            backgroundColor: green ? "green" : "white",
            borderRadius: "100%",
          }}











        ></div> */}

        {Object.keys(mainObj).map((item, i) => {
          return (
            <div
              key={i}
              style={{
                height: 100,
                width: 100,
                backgroundColor: currentLight === item ? item : "white",
                borderRadius: "100%",
              }}
            ></div>
          );
        })}
      </div>
      {/* {Numbu) / 1000} */}
    </div>
  );
};
