import React from "react";

export const ApplyPollyfill = () => {
  const obj1 = {
    name: "shivam",
    age: 26,
  };
  const obj2 = {
    name: "kawde",
    age: 26,
  };
  // console.log(typeof obj1)

  function printName(city, code) {
    console.log(this.name, city, code);
  }

  Function.prototype.myApply = function (obj, args) {
    if (!Array.isArray(args)) throw new Error("please provide args");
    if (typeof obj !== "object") throw new Error(obj, "is not object");

    obj.fn = this;
    obj.fn(...args);
  };

  Function.prototype.myBind = function (obj, ...args) {
    if (typeof obj !== "object") throw new Error(obj, "is not object");

    obj.fn = this;

    return function () {
      obj.fn(...args);
    };
  };

  const mm = printName.myBind(obj1, "balaghat", "nbv");
  mm();

  printName.myApply(obj1, ["bhopal", 123]);
  return <div>ApplyPollyfill</div>;
};
