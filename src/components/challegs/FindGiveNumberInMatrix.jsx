import React from "react";

export const FindGiveNumberInMatrix = () => {
  const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const isGivenNumber = (arr, givenNumber, index1, index2) => {
    let ans = "";
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        ans = isGivenNumber(arr[i], givenNumber, i, i + 1);
        if (ans || ans === 0) {
          return ans + "" + i;
        }
      } else {
        if (arr[i] === givenNumber) {
          return i;
        }
      }
    }
    return ans;
  };

  console.log(isGivenNumber(arr1, 5, 0, 0));

  return <div>FindGiveNumberInMatrix</div>;
};
