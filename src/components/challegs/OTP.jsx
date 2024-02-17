import React, { useRef } from "react";

export const OTP = () => {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const handleInputChange = (currentRef, nextRef) => {
    // Perform any logic for the current input

    // Focus on the next input
    console.log(currentRef.current.value, "om");
    if (currentRef.current.value.length > 0) nextRef.current.focus();
  };
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        justifyContent: "center",
        padding: 50,
      }}
    >
      <input
        style={{
          height: 30,
          width: 30,
          textAlign: "center",
        }}
        maxLength={1}
        ref={input1Ref}
        onChange={() => handleInputChange(input1Ref, input2Ref)}
      ></input>
      <input
        style={{
          height: 30,
          width: 30,
          textAlign: "center",
        }}
        maxLength={1}
        ref={input2Ref}
        onChange={() => handleInputChange(input2Ref, input3Ref)}
      ></input>
      <input
        style={{
          height: 30,
          width: 30,
          textAlign: "center",
        }}
        maxLength={1}
        ref={input3Ref}
        onChange={() => handleInputChange(input3Ref, input4Ref)}
      ></input>
      <input
        style={{
          height: 30,
          width: 30,
          textAlign: "center",
        }}
        maxLength={1}
        ref={input4Ref}
        onChange={() => handleInputChange(input4Ref, input1Ref)}
      ></input>
    </div>
  );
};
