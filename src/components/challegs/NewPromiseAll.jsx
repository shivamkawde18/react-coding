import React from "react";

export const NewPromiseAll = () => {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p1 resolve");
    }, 3000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 resolve");
    }, 5000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rehe");
    }, 7000);
  });

  function myAll(promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      let complete = promises.length;
      promises.forEach((promise, i) => {
        promise
          .then((res) => {
            result.push(res);
            complete = complete - 1;
            if (complete === 0) {
              resolve(result);
            }
          })
          .catch((err) => reject(err));
      });
    });
  }

  myAll([p1, p2, p3]).then((res) => console.log(res));
  return <div>NewPromiseAll</div>;
};
