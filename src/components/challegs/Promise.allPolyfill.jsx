import React from "react";

export const PromiseAllPolyfill = () => {
  console.log("jj");
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p1,sucsess");
    }, 100);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2 any");
    }, 200);
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p3 ");
    }, 100);
  });

  //   Promise.allSettled([p1,p2,p3]).then((res)=>{
  //     console.log(res,"allsettled")
  //   }).catch((err)=>{
  //     console.log(err)
  //   })

  //   Promise.race([p1,p2,p3]).then((res)=>console.log(res,"res"))
  Promise.any([p1, p2, p3]).then((res) => console.log(res, "any"));

  //   function myAll(promises) {
  //     return new Promise((resolve, reject) => {
  //       let result = [];
  //       let complete = promises.length;
  //       promises.forEach((value, index) => {
  //         Promise.resolve(value).then((res) => {
  //           result[index] = res;
  //           complete--;

  //           if (complete === 0) {
  //             resolve(result);
  //           }
  //         });
  //       });
  //     });
  //   }

  // Example promises (replace with your actual promises)
  //   const p1 = Promise.resolve(1);
  //   const p2 = Promise.resolve(2);
  //   const p3 = Promise.resolve(3);

  //   myAll([p1, p2, p3])
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));

  //promise.all polyfill
  function myAll(promises) {
    return new Promise((resolve, reject) => {
      let result = [];
      let complete = promises.length;
      promises.forEach((value, index) => {
        Promise.resolve(value)
          .then((res) => {
            result[index] = res;
            complete--;
            if (complete === 0) {
              resolve(result);
            }
          })
          .catch((err) => reject("err"));
      });
    });
  }
  //   myAll([p1, p2, p3])
  //     .then((res) => console.log(res))
  // .catch((err) => console.log(err));

  //Promise.allSetlled polyfill

  function promiseAllSetlled(promises) {
    return new Promise((resolve, reject) => {
      const result = [];

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((res) => {
            result.push({
              status: "fullfill",
              value: res,
            });
            if (index === promises.length - 1) resolve(result);
          })
          .catch((err) => {
            result.push({
              reason: err,
              status: "rejected",
            });
            if (index === promises.length - 1) resolve(result);
          });
      });
    });
  }

  promiseAllSetlled([p1, p2, p3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  //Promise.race pollyfill
  function promiseRace(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then(resolve).catch(reject);
      });
    });
  }

  promiseRace([p1, p2, p3])
    .then((res) => console.log(res, "rece the"))
    .catch((err) => console.log(err, "race error"));

  function promiseAny(promises) {
    let results = [];
    var counter = 0;

    return new Promise((resolve, reject) => {
      promises.forEach((p, index) => {
        p.then((result) => {
          resolve(result);
        }).catch((err) => {
          results.push(err);
          ++counter;
          if (counter === promises.length) {
            reject(results);
          }
        });
      });
    });
  }

  promiseRace([p1, p2, p3]).then((res) =>
    console.log(res, "any folifill").catch((err) => console.log(err))
  );

  const sumFun = (...args1) => {
    return (...args2) => {
      return args2.length > 0
        ? sumFun(
            args1.reduce((a, value) => a + value) +
              args2.reduce((a, value) => a + value)
          )
        : args1.reduce((a, value) => a + value);

   
    };
  };
  const s = sumFun(10, 20, 30,12)(30, 30)(1,1)(33,99)();
  console.log(s, "dssd");

  return <div>A</div>;
};
