import React from "react";

export const DeepCopyPollyFill = () => {
  const obj = {
    name: "shivam",
    age: 26,
    add: {
      pin: 123,
      city: "abc",
    },
  };

  const deepCopy = (object) => {
    let givenObj = {};

    if (typeof object === "object" && object !== null) {
      for (let key in object) {
        givenObj[key] = deepCopy(object[key]);
      }
    } else {
      givenObj = object;
    }

    return givenObj;
  };

  const deepCopyObject = deepCopy(obj);

  console.log(deepCopyObject, "copy");
  console.log(obj, "main");

  deepCopyObject.name = "shivaay";
  console.log(deepCopyObject);
  console.log(obj, "main");

  deepCopyObject.add.pin = 333;
  console.log(deepCopyObject);
  console.log(obj, "main");

  return <div>DeepCopyPollyFill</div>;
};
