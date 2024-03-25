import React, { useState } from "react";

const Squre = (props) => {
  const { value, onClickmain, index } = props;
  return (
    <div
      onClick={() => {
        onClickmain(index);
      }}
      style={{
        height: 30,
        width: 30,
        border: "solid 1px",
      }}
    >
      {value}
    </div>
  );
};
export const TicTacToGame = () => {
  const [input, setInput] = useState([].fill(null));
  const [currentInput, setCurrentInput] = useState("X");
  console.log(input);

  const checkWinner = () => {
    if (
      (input[0] && input[0] === input[1] && input[0] === input[2]) ||
      (input[0] && input[0] === input[3] && input[0] === input[6]) ||
      (input[0] && input[0] === input[4] && input[0] === input[8]) ||
      (input[1] && input[1] === input[4] && input[1] === input[7]) ||
      (input[2] && input[2] === input[5] && input[2] === input[8]) ||
      (input[3] && input[3] === input[4] && input[3] === input[5]) ||
      (input[6] && input[6] === input[7] && input[6] === input[8])
    ) {
      return true;
    }
    return false;
  };
  const onClickmain = (index) => {
    const temp = [...input];
    temp[index] = currentInput === "X" ? "o" : "X";
    setInput(temp);
    setCurrentInput(currentInput === "X" ? "o" : "X");
  };
  return (
    <div>
      {checkWinner() ? (
        <>{currentInput} is winner</>
      ) : (
        <>
          <div className="row">
            <Squre value={input[0]} onClickmain={onClickmain} index={0} />
            <Squre value={input[1]} onClickmain={onClickmain} index={1} />
            <Squre value={input[2]} onClickmain={onClickmain} index={2} />
          </div>
          <div className="row">
            <Squre value={input[3]} onClickmain={onClickmain} index={3} />
            <Squre value={input[4]} onClickmain={onClickmain} index={4} />
            <Squre value={input[5]} onClickmain={onClickmain} index={5} />
          </div>
          <div className="row">
            <Squre value={input[6]} onClickmain={onClickmain} index={6} />
            <Squre value={input[7]} onClickmain={onClickmain} index={7} />
            <Squre value={input[8]} onClickmain={onClickmain} index={8} />
          </div>
        </>
      )}
    </div>
  );
};
