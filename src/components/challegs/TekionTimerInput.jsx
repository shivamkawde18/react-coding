import React, { useEffect, useState } from "react";

export const TekionTimerInput = () => {
  const [text, setText] = useState();

  const [mainTimer, setMainTimer] = useState(false);

  const [list, setList] = useState([]);

  useEffect(() => {
    let timer;
    if (mainTimer && text > 0) {
      timer = setInterval(() => {
        setText((pre) => pre - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [mainTimer, text]);

  useEffect(() => {
    let time;
    time = setInterval(() => {
      const temp = list;
      for (let i = 0; i < temp.length; i++) {
      if(temp[i].text - 1>=0){
        temp[i].text = temp[i].text - 1;
      }
    //  console.log(temp[i].text)
     //setList([...temp])
      }
      setList([...temp]);
    }, 1000);

    return () => clearInterval(time);
  }, [list]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: 20,
        }}
      >
        <input
          value={text}
          type="number"
          placeholder="enter timer"
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        />
        <button onClick={() => setMainTimer(true)}>start</button>
      </div>

      <button
        onClick={() => {
          setList([
            ...list,
            {
              text: text,
              id: list.length - 1,
            },
          ]);
        }}
      >
        create new timer
      </button>

      {list.map((e) => (
        <h3>{e.text}</h3>
      ))}
    </div>
  );
};
