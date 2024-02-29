import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCustomCallback, useMemoCustom } from "../../utils/hooks";

const Child=(props)=>{
  useEffect(()=>{
console.log("expensive task")
const ex=props.fun(props.number)
console.log(ex)
  },[props.fun])
  return <div>child</div>
}
export const UseMemoPollyfill = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const ref = useRef("");
  // const useMyMemo = (callback, depandency) => {
  //   useEffect(() => {
  //     callback();
  //   }, [...depandency]);
  // };
  const addTheNumber = (number) => {
    // console.log(number,"number")
    let sum = number;
    for (let i = 1; i <= 100; i++) {
      sum = sum + 1;
    }
    console.log("expensive call sum");
    return sum;
  };

  // const optimize=useCallback(addTheNumber,[state1])

 

const myCallback=useCustomCallback(addTheNumber,[state1])

  // const s = useMemo(()=>{
  //   return addTheNumber(state1)
  // }, [state1]);
  // const value = useMemoCustom(() => {
  //   return addTheNumber(state1);
  // }, [state1]);



  // addTheNumber(state1)
  // useMemoCustom(()=>{
  //   return addTheNumber(state1)
  // },[state1])
  //   console.log(addTheNumber(state1),"fun value")
  //  console.log(s, "dekhi");

  // console.log(value, "hiii");

  return (
    <div>
      <button
        style={{
          height: 30,
          width: 50,
        }}
        onClick={() => setState1((pre) => pre + 1)}
      >
        state1
      </button>

      <button
        style={{
          height: 30,
          width: 50,
        }}
        onClick={() => setState2((pre) => pre + 1)}
      >
        state2
      </button>
      <Child fun={myCallback} number={state1}/>
    </div>
  );
};
