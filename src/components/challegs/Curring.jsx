import React from "react";
//https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
export const Curring = () => {
  const normalFun = (a, b, c) => {
    return a + b + c;
  };

  console.log(normalFun(1, 2, 3));

  //curry function
  const curryFun = (a) => {
    return (b) => {
      return (c) => {
        return a + b + c;
      };
    };
  };
  console.log(curryFun(5)(1)(1));

  //partial application

  const parialApplication = (a) => {
    return (b, c) => {
      return a + b + c;
    };
  };

  const result = parialApplication(5)(1, 2);
  //   console.log(result, "partial application");

  //what if we have mutiple n number of args in fuction curring how you ll deal with them?

  //que  sum(2)(3)(4)(5)(5).....n

  const nSum = (a) => {
    return (b) => {
      if (b) {
        return nSum(a + b);
      } else {
        return a;
      }
    };
  };

  //walmart
  console.log(nSum(1)(4)(), "n sum");

  const doublePara = (a, b) => {
    return (c, d) => {
      return c && d ? a + b + c + d : a + b;
    };
  };

  console.log(doublePara(2, 3)(), "double para");

  //walmart  if we have a function which takes matiple args
  const nParaSum = (...args1) => {
    return (...args2) => {
      return args2.length
        ? args1.reduce((a, b) => (a += b)) + args2.reduce((a, b) => (a += b))
        : args1.reduce((a, b) => (a += b));
    };
  };
  console.log(nParaSum(1, 5, 21, 22)(45, 5), "n para");

  return <div>Curring</div>;
};
