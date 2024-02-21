import React from "react";

export const FollyfillforFlatmethod = () => {
  //n3 soluction

  const myFlat = (arr) => {
    const ans = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i]?.length; j++) {
        if (Array.isArray(arr[i][j])) {
          for (let k = 0; k < arr[i][j]?.length; k++) {
            ans.push(arr[i][j][k]);
          }
        } else {
          ans.push(arr[i][j]);
        }
      }
    }

    return ans;
  };

  //with recursion

  const myFlatRecussion = (arr) => {
    if (!Array.isArray(arr)) return [];
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const a = myFlat(arr[i]);
        ans = [...ans, ...a];
      } else ans.push(arr[i]);
    }
    return ans;
  };

  const arry = [
    [1, 2, [2, 3], 3, [12]],
    [2, 3, 4, [1, 2], [23]],
    [5, 5, 6],
  ];

  console.log(myFlat(arry));

  //compose function hmko ye sare function right to left chalana h with given value
  const addFive = (a) => {
    return a + 5;
  };
  const subTract2 = (a) => a - 2;

  const multiply4 = (a) => a * 4;
  const compose = (...args) => {
    return (intialValue) => {
      // let value=intialValue

      // for(let i=args.length-1;i>=0;i--){

      //     value=args[i](value)

      // }
      // return value

      return args.reduceRight(
        (a = intialValue, value) => value(a),
        intialValue
      );
    };
  };
  const coposedFun = compose(addFive, subTract2, multiply4);
  console.log(coposedFun(5));

  return <div>FollyfillforFlatmethod</div>;
};
