import React from 'react'

export const Promisify = () => {


const addNumber=(num)=>{

return num+1

}

const Promisify=(fn)=>{
    return new Promise((resolve,reject)=>{
if(typeof fn !=="function")reject("this is not function")
resolve(fn(2))
    })
}

Promisify(addNumber).then((res)=>{
    console.log(res)
})





  return (
    <div>Promisify</div>
  )
}
