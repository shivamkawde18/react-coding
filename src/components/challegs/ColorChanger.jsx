import React, { useState, useEffect } from "react";

export const ColorChanger = () => {
  const [color, setColor] = useState("yellow");
  const [id, setId] = useState([]);
  const arr = new Array(8);

console.log("hiii")
    let time;
 
    if (id.length === arr.length&&id.length>0) {
      time = setInterval(() => {
        id.pop();
        setId([...id]);
      }, 1000);
    }
    useEffect(()=>{
        return ()=>{
            if(id.length===0){
                clearInterval(time)
            }
        }
    })

    // Cleanup function to clear the interval when the component is unmounted
    // return () => {
    //   clearInterval(time);
    // };
  // Add dependencies to the dependency array

  arr.fill(1);
console.log(id.length,"tye")
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {arr.map((item, index) => (
        <div
          key={index}
          style={{
            height: 30,
            width: 30,
            background: id.includes(index) ? "green" : "yellow",
          }}
          onClick={() => {
            setColor("green");
            setId([...id, index]);
          }}
        ></div>
      ))}
    </div>
  );
};
