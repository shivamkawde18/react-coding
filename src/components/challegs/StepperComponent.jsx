import React, { useState } from "react";

const data = [
  {
    name: "profile",
    component: <div>my profile</div>,
  },
  {
    name: "payment",
    component: <div>payment</div>,
  },
  {
    name: "checkout",
    component: <div>checlout</div>,
  },
  {
    name: "logout",
    component: <div>logout</div>,
  },
];
export const StepperComponent = () => {
  const [currentComponent, setComponent] = useState();
  const[completeColor,setColor]=useState([])
  return (
    <div>
      <div
        style={{
          display: "flex",

          marginTop: 20,
          padding: 20,
          alignItems: "center",
        }}
      >
        {data.map((component, index) => {
          return (
            <>
              <div
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor:completeColor.includes(component.name)?"green": "gray",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => {
                  setComponent(component.component);
                  setColor([...completeColor,
                    component.name,
                   
                  ])
                }}
              >
                {index + 1}
              </div>
              {index !== data.length - 1 && (
                <div
                  style={{
                    height: 5,
                    width: 100,
                    backgroundColor:completeColor.includes(component.name)?"green": "gray",
                  }}
                ></div>
              )}
            </>
          );
        })}
        {/* <div
          style={{
            height: 30,
            width: 30,
            backgroundColor: "gray",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1
        </div>
        <div
          style={{
            height: 5,
            width: 100,
            backgroundColor: "gray",
          }}
        ></div>
        <div
          style={{
            height: 30,
            width: 30,
            backgroundColor: "gray",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2
        </div>
        <div
          style={{
            height: 5,
            width: 100,
            backgroundColor: "gray",
          }}
        ></div>
        <div
          style={{
            height: 30,
            width: 30,
            backgroundColor: "gray",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3
        </div>
        <div
          style={{
            height: 5,
            width: 100,
            backgroundColor: "gray",
          }}
        ></div>
        <div
          style={{
            height: 30,
            width: 30,
            backgroundColor: "gray",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          4
        </div> */}
      </div>
      {currentComponent}
    </div>
  );
};
