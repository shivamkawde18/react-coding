import React, { useState } from "react";

export const WordCounts = () => {
  const [string, setString] = useState("");
  console.log({ string });


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <textarea
          onChange={(e) => {
            setString(e.currentTarget.value);
          }}
          style={{
            height: 100,
            width: 500,
          }}
        ></textarea>
        <div>words : </div>
        <div>character :{string.length} </div>
      </div>

      <button>count</button>
      <button>clear</button>
    </div>
  );
};
