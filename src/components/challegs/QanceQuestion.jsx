//supose we have two state and have child component but 
//we want our child component should re render when state 1 change

import { useEffect, useState } from "react";

const Child = () => {
  console.log("Child");
  return <div>hii child</div>;
};

export default function App() {
  const [state1, setState1] = useState(2);
  const [state2, setState2] = useState(2);
  const [rerenderChild, setRerenderChild] = useState(false);

  useEffect(() => {
    // Update rerenderChild when state1 changes
    setRerenderChild(true);
  }, [state1]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      {/* Render Child component conditionally */}
      {rerenderChild && <Child />}
      <button onClick={() => setState1(state1 + 1)}>+</button>
      <button onClick={() => setState1(state1 - 1)}>-</button>
    </div>
  );
}
