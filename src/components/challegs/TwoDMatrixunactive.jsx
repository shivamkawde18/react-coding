import React, { useEffect, useState } from "react";

export const TwoDMatrixunactive = () => {
  const [arr, setArr] = useState(Array(9).fill(null));
  const [input,setInput]=useState([])

  useEffect(() => {
    const check = arr.filter((value) => value?.isgreen === true);
  
    let timer;
    if (check.length === arr.length&&check.length>0) {
        console.log(input,"before timer")
      timer = setTimeout(() => {
        const inputUndo = [...input]; // Create a copy of the input array
        const lastIndex = inputUndo.length - 1; // Index of the last element
        inputUndo.splice(inputUndo[lastIndex].index, 1); 
        console.log(inputUndo,"after")
        setArr(inputUndo);
        setInput(inputUndo)
      }, 2000);
    } else {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [arr]);
  const onContent = (index) => {
    const temp = [...arr];

    temp[index] = {isgreen:true,index:index};
    setArr(temp);
    setInput([...input,{index:index,isgreen:true}])
  };
  return (
    <div>
      <div
        className="myrow"
        style={{
          display: "flex",
        }}
      >
        <div
          onClick={() => {
            onContent(0);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[0]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
        <div
          onClick={() => {
            onContent(1);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[1]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
        <div
          onClick={() => {
            onContent(2);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[2]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
      </div>
      <div
        className="myrow"
        style={{
          display: "flex",
        }}
      >
        <div
          onClick={() => {
            onContent(3);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[3]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
        <div
          onClick={() => {
            onContent(4);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[4]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
        <div
          onClick={() => {
            onContent(5);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[5]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
      </div>
      <div
        className="myrow"
        style={{
          display: "flex",
        }}
      >
        <div
          onClick={() => {
            onContent(6);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[6]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
        <div
          onClick={() => {
            onContent(7);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[7]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
        <div
          onClick={() => {
            onContent(8);
          }}
          style={{
            height: 50,
            width: 50,
            border: "solid 1 px",
            backgroundColor: arr[8]?.isgreen ? "green" : "white",
          }}
          className="content"
        ></div>
      </div>
    </div>
  );
};
