import React from "react";

export const FaltObject = () => {
  // const obj={
  // name:"shivam",
  // sirname:"kawde",
  // add:{
  //     villeage:"docn",
  //     pin:123
  // },
  // company:{
  //     name:"geeky"
  // }

  // }
  let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91 - 999999999,
    mentor: {
      HTML: "GFG",
      CSS: "GFG",
      JavaScript: "GFG",
    },
  };
  const flatObj = (obj) => {
    let tempObj = {};
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        const result = flatObj(obj[key]);
        const path = key;
        for (let key in result) {
          // const ll={}
          // ll[path+"."+key]=result[key]

          // tempObj={...tempObj,...ll}
          tempObj[path + "." + key] = result[key];
        }
      } else {
        tempObj[key] = obj[key];
      }
    }

    return tempObj;
  };

  console.log(flatObj(obj));
  return <div>FaltObject</div>;
};
