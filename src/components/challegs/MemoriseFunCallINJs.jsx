import React from "react";

export const MemoriseFunCallINJs = () => {
  const expensive = (value) => {
    for (let i = 0; i < 10000000000; i++) {}
    return value * value;
  };

  const memorize = (fn) => {
    const result = {};
    return (value) => {
      const s = value + "";
      if (!result[s]) {
        result[s] = fn(value);
      }
      return result[s];
    };
  };
  const memoFun = memorize(expensive);
  // memoFun(2)

  //yha expensive ki call is too much time taking after 1call 2nd call bhi utna time legi
  console.log(expensive(2));
  console.log(expensive(2));

  //yha humne apne ans ko memorize kiya agr humare pass ans aa gya h toh 2nd call me utna time nahi lgega
  console.log(memoFun(2));
  console.log(memoFun(2));

  return <div>MemoriseFunCallINJs</div>;
};
