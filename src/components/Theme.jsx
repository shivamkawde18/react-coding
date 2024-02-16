import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../App";

export const Theme = () => {
  // const [theme, setTheme] = useState("light");
  // console.log(theme);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setTheme("dark");
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  const { theme, setTheme } = useContext(themeContext);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <div>
        <button
          style={{
            height: 50,
            width: 50,
          }}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme}
        </button>
      </div>
      <p
        style={{
          color: theme === "dark" ? "white" : "black",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        commodi consequatur quia odit saepe dicta ea maxime provident qui, sint
        facere enim doloribus magnam quibusdam laboriosam amet consequuntur
        aspernatur earum?
      </p>
    </div>
  );
};
