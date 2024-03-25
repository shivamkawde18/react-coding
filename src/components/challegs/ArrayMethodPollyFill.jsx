import React from "react";

export const ArrayMethodPollyFill = () => {
  Array.prototype.myMap = function (callback) {
    const arr = this;
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  };

  Array.prototype.myFilter = function (callback) {
    const arr = this;

    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) result.push(arr[i]);
    }
    return result;
  };

  Array.prototype.myReduce = function (callback, inn) {
    const arr = this;
    let result = inn;
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i]);
    }
    return result;
  };

  const arr = [1, 2, 3, 4, 5];

  const ans = arr.filter((e) => e > 2);
  const a = arr.filter((e) => e > 5);

  const sum = arr.reduce((a, currentValue) => a + currentValue, 2);

  const sum2 = arr.myReduce((a, currentValue) => a + currentValue, 2);
  console.log(sum2, "22");
  console.log(sum);
  console.log(ans);
  console.log(a);
  return <div>ArrayMethodPollyFill</div>;
};
