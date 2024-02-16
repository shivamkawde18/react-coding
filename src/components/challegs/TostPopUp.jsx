import React, { useEffect, useState } from "react";

export const TostPopUp = () => {
  const [showToast, setToast] = useState(false);
  const [count, setCount] = useState([]);

  useEffect(() => {
    setTimeout(() => {
        let newArr
  if(count.length>0)
   newArr=count.splice(count.length-1)

//   console.log(newArr,"new")
setCount(count)
  console.log(count,"old")
    }, 3000);
  }, [showToast]);
  console.log(count);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {showToast &&
          count.map((e, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "green",
                  padding: 10,
                }}
              >
                this is a toast
              </div>
            );
          })}
      </div>
      <button
        onClick={() => {
          setToast(true);
          setCount([...count, 1]);
        }}
      >
        show tost
      </button>
    </div>
  );
};
