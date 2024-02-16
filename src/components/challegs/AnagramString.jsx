import React, { useState } from "react";

export const AnagramString = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");

  const checkAnagram = (string1, string2) => {
    const s1 = string1.split("");
    const s2 = string2.split("");
    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {



        
      }
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          padding: 50,
        }}
      >
        <input
          placeholder="enter 1st string"
          style={{
            height: 20,
            width: 150,
          }}
          onChange={(e) => {
            setStr1(e.currentTarget.value);
          }}
        />

        <input
          placeholder="enter 2nd string"
          style={{
            height: 20,
            width: 150,
          }}
          onChange={(e) => {
            setStr2(e.currentTarget.value);
          }}
        />
        <button
          style={{
            backgroundColor: "green",
          }}
          onClick={() => {
            console.log(checkAnagram(str1, str2));
          }}
        >
          check anagram
        </button>
      </div>
      <h1>result</h1>
    </div>
  );
};
