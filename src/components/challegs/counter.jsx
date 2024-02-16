import React, { useState } from "react";

export const Counter = () => {
  const [givenValue, setGivenValue] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <h3>{count}</h3>

      <div
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <button
          style={{
            height: 50,
            width: 50,
          }}
          onClick={() => {
            setCount((pre) => pre + parseInt(givenValue));
          }}
        >
          +
        </button>
        <button
          style={{
            height: 50,
            width: 50,
          }}
          onClick={() => {
            setCount((pre) => pre - parseInt(givenValue));
          }}
        >
          -
        </button>
      </div>
      <div>
        <div>inrement/decrimet</div>
        <input
          placeholder="enter value"
          style={{
            height: 20,
            width: 120,
          }}
          onChange={(e) => {
            setGivenValue(e.currentTarget.value);
          }}
        ></input>
      </div>
      <button
        style={{
          height: 50,
          width: 50,
        }}
      >
        Reset
      </button>
    </div>
  );
};
