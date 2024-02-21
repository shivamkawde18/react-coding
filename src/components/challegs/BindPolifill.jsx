import React from "react";

export const BindPolifill = () => {
  const obj = {
    name: "shivam",
  };

  function printName(city) {
    console.log(this.name, city);
  }

  //printName.call(obj)
  const fn = printName.bind(obj);

  // fn()
  Function.prototype.myBind = function (obj, args) {
    const context = this;
    return function () {
      context.call(obj, args);
    };
  };
  const myfn = printName.myBind(obj, "balaghat");
  myfn();

  //output based questions

  var object = { name: "piyush" };
  function sayHello(age, profession) {
    return "hello" + this.name + age + "and is an" + profession;
  }

  return <div>BindPolifill</div>;
};
