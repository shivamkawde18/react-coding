import React, { useState } from "react";

export const TableColorizer = () => {
  const [number, setNumber] = useState();
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <input
        onChange={(e) => {
          setNumber(parseInt(e.currentTarget.value));
        }}
      ></input>
      <div className="conatiner">
        {arr.map((item, i) => {
          return (
            <div
              className="item"
              key={item + i}
              style={{
                backgroundColor: number === item ? "red" : "white",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
