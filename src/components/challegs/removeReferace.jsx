import React from "react";

export const RemoveReferace = () => {
  const object = {
    a: 1,
    b: 2,
    c: {
      d: 5,
    },
  };
  object.c.d = object;
  object.c.e = object;

//   for (const key in obj) {
    
//   }

  const myFun=(obj)=>{
if(typeof obj!==Object) {
    return {}
}
if(obj===object)
       {
        return {}
       }

    for (const key in obj) {

      
       const ans=myFun(obj[key])
       ans.key=obj[key];
       return ans
    
    }


  }

console.log(object,"old")

  myFun(object)

 console.log(myFun(object),"hiiii")

  return <div>removeReferace</div>;
};
