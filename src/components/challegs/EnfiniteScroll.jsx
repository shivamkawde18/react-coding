import React, { useEffect, useState } from 'react'

export const EnfiniteScroll = () => {
    const [count,setCount]=useState(50)
  const element=[]
    for(let i=0;i<count;i++){
element.push(<div key={i}>{i+1}</div>)
    }


    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        var isBottom = window.scrollTop + window.clientHeight >= window.scrollHeight;

        // if(window.innerHeight+window.scrollY>=window.document.body.offsetHeight ){
        //     setCount(count+50)
        // }
        if(isBottom ){
            setCount(count+50)
        }
      })
      return ()=>window.removeEventListener("scroll")
    },[count])
  return (
    <div>{
        element.map((item,i)=>{
            return item
        })
    }</div>
  )
}
