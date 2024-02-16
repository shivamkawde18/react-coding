import React from "react";

export const Debounce = () => {
  function debounce(func, delay) {
    let timeoutId;
console.log(timeoutId,"id")
    return function (...args) {
      console.log(timeoutId,"id 33")
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
 

        func()
      }, delay);
    };
  }
  function myFunction() {
    console.log("Executing debounced function!");
  }

  // Debounce the function with a delay of 500 milliseconds
  const debouncedFunction = debounce(myFunction, 500);

  return (
    <input
      placeholder="type here"
      onChange={(e) => {
        debouncedFunction()
      }}
    ></input>
  );
};
