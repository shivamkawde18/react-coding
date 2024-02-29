import React, { useEffect, useState } from "react";

export const Promisify = () => {
  const addNumber = (num) => {
    return num + 1;
  };

  const Promisify = (fn) => {
    return new Promise((resolve, reject) => {
      if (typeof fn !== "function") reject("this is not function");
      resolve(fn(2));
    });
  };

  Promisify(addNumber).then((res) => {
    console.log(res);
  });

  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    let timer;
    if (progressBar < 500) {
      timer = setInterval(() => {
        setProgressBar((pre) => pre + 10);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [progressBar]);
  const devider = 500 / 100;


  return (
    // <div>
    //   <div
    //     style={{
    //       height: 30,
    //       width: 500,
    //       background: "red",
    //       borderRadius: 10,
    //       overflow: "hidden"

    //     }}
    //   >
    //     <div
    //       style={{
    //         textAlign: "center",

    //       }}
    //     >
    //       {Math.floor(progressBar/devider)}%
    //     </div>
    //     <div
    //       style={{
    //         height: 30,
    //         width: progressBar,
    //         background: "green",
    //         borderRadius: 10,
    //         position:"absolute",
    //         top:0,
    //         opacity:0.3

    //       }}
    //     >
    //       {" "}
    //     </div>
    //   </div>
    // </div>
    <div>
      <div
        style={{
          height: 30,
          width: 500,
          background: "red",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            textAlign: "center",
             transition: "width 0.5s ease-in-out", // Add a transition property
          }}
        >
          {Math.floor(progressBar / devider)}%
        </div>
        <div
          style={{
            height: 30,
            width: progressBar,
            background: "green",
            borderRadius: 10,
            position: "absolute",
            top: 0,
            opacity: 0.3,
            transition: "width 0.5s ease-in-out", // Add a transition property
          }}
        ></div>
      </div>
    </div>
  );
};
