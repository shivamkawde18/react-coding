import React from "react";

export const MapFilterPolyFill = () => {

    //reduce prototye
Array.prototype.myReduce=function(callback,intialValue){
    
    const arr= this
    console.log(callback)
    let result=intialValue

    for(let i=0;i<arr.length;i++){
        
        callback(result=arr[i]+result,arr[i])
        
        
    }
    
    
    return result
    
}
const arr=[10,20,20]

const ans=arr.myReduce((a,currentValue)=>{
    console.log(a,"acc")
    console.log(currentValue ,"cuu")
    return a+currentValue
},1)
console.log(ans)


//map prototypetype
Array.prototype.myMap=function(callback){
    const result=[]
    
    for(let i=0;i<this.length;i++){
      result.push(callback(this[i]))
    }
    return result
    
    
}


const resultentArray=arr.myMap((value)=>value+2)

console.log(resultentArray)
//filter polyfill
Array.prototype.myFilter=function(callback){
    
    const result=[]
    for(let i=0;i<this.length;i++){
        
        if(callback(this[i]))
        {
            result.push(this[i])
        }
    }
    return result
    
    
}

const myans= arr.myFilter((value)=>value>10)
console.log(myans)




const p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
      resolve("p1 resolved")
  },300)
})
const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
      reject("rehce")
  },2000)
})

// Promise.all([p1,p2]).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   throw new Error("hii")
// })






function myPromiseAll(promises){
    
  const result=[]
  let check=promises.length;
  return new Promise((resolve,reject)=>{
      for(let i=0;i<promises.length;i++)
      {
          
          promises[i].then((res)=>{
              result.push(res)
              check--;
              if(check===0)
          resolve(result)
              
          }).catch((err)=>reject(err))
          
          
          
      
  }
})
}

myPromiseAll([p1,p2]).then((res)=>{
  console.log(res,"mmmm")
}).catch((err)=>console.log(err))


  return (
    <div
      style={{
        height: 80,
        width: 80,
        background: "pink",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:50
      }}
      onClick={()=>{
        console.log("super parent")
      }}
    >
      <div
        style={{
          height: 70,
          width: 70,
          background: "green",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          padding:50

        }}
        onClick={()=>{
            console.log(" parent")
          }}
      >
        <div
          style={{
            height: 50,
            width: 50,
            background: "red",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
          onClick={()=>{
            console.log("child")
          }}
        ></div>
      </div>
    </div>
  );
};
