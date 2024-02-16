import React, { useEffect, useState } from "react";

export const PhoneNumberValidetor = () => {
  const [number, setNumber] = useState("");
  const [miniCheck, setMiniCheck] = useState("");
  const [mainString,setMainString]=useState("")
//   useEffect(() => {
//     if (number.length === 3) {
//       const newstr = `+(${number})-`;
//       console.log(newstr);
//       setNumber(newstr);
//     }
//   }, [number]);

  const getFinalStr = (string) => {
    console.log(string, "dekho");
    const char = string.charAt(string.length - 1);
    console.log(char, "char");
    return miniCheck + char;
  };
  //   console.log({ miniCheck });
  console.log(number, "combi");
  return (
    <div>
      <input
        maxLength={16}
    value={miniCheck}
        onChange={(e) => {
          if (miniCheck.length <= 3) {
            console.log("hiiii");
            if (miniCheck.length === 3) {
              const newstr = `+(${miniCheck})-`;
              setMiniCheck(newstr);
            } else setMiniCheck(e.currentTarget.value);
          }
           else {
            const final = getFinalStr(mainString);
            console.log(final, "final");

            setNumber(final);
          }

          setMainString(e.currentTarget.value)
        }}
      />
    </div>
  );
};
