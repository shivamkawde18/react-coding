import React from "react";

export const CallPollyfill = () => {
  const obj1 = {
    name: "shivam",
    age: 26,
  };
  const obj2 = {
    name: "kawde",
    age: 26,
  };
  // console.log(typeof obj1)

  function printName(city) {
    console.log(this.name, city);
  }

  Function.prototype.myCall = function (obj, args) {
    if (Array.isArray(obj))  throw new Error(obj, "is not object");
    if (typeof obj !== "object") throw new Error(obj, "is not object");

    obj.fn = this;
    obj.fn(args);
  };

  printName.myCall(obj1, "kumar");

  return <div>CallPollyfill</div>;
};
