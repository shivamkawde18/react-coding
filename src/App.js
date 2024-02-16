import React, { createContext, useState, useEffect, useRef } from "react";
import { Theme } from "./components";
import { useDebounce } from "./utils/hooks";
export const themeContext = createContext();

function App() {
  //promise.all

  // const p1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject("p1,sucsess");
  //   }, 5000);
  // });

  // const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject("p2,sucsess");
  //   }, 7000);
  // });

  // const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject("rejected");
  //   }, 1000);
  // });

  // Promise.all([p1,p2,p3]).then((res)=>{
  //   console.log(res)
  // })

  // Promise.allSettled([p1,p2,p3]).then((res)=>{
  //   console.log(res)
  // })

  // Promise.race([p1,p2,p3]).then((res)=>{
  //   console.log(res)
  // })

  // Promise.any([p1,p2,p3]).then((res)=>{
  //   console.log(res)
  // })

  const ref = useRef(true);
  console.log(ref);
  const [theme, setTheme] = useState("light");
  console.log(theme);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTheme("dark");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  useEffect(() => {
    let firstRender = ref.current;
    if (firstRender) {
      ref.current = false;
      console.log("first render");
    } else {
      console.log("not a first render");
    }
  });
  const [text, setText] = useState();
  // console.log(text,"text")
  const debounced = useDebounce(text, 2000);
  console.log(debounced, "debounced");
  return (
    <div>
      <themeContext.Provider
        value={{
          theme: theme,
          setTheme: setTheme,
        }}
      >
        <Theme />
        <input
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        ></input>
      </themeContext.Provider>
    </div>
  );
}

export default App;
