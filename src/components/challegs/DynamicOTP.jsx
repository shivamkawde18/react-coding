import React, { useRef } from "react";

export const DynamicOTP = () => {
  let number = 123123;

  const s = number.toString();
  console.log(s.length);
  const arr = new Array(s.length);
  console.log(arr.fill(1));
  const inputRef = useRef([]);
  console.log(inputRef);
  return (
    <div>
      {arr.map((item, i) => {
        return (
          <input
            maxLength={1}
            key={i}
            ref={(el) => (inputRef.current[i] = el)}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              // console.log(inputRef.current[i].value.)
              if (inputRef.current[i].value.length > 0 && i + 1 < arr.length)
                inputRef.current[i + 1].focus();
            }}
          />
        );
      })}
    </div>
  );
};
