import React, { useEffect, useState } from "react";
const api = ["apple", "mango", "banana", "orange"];
export const AutoComplete = () => {
  const [text, setText] = useState("");
  const[result,setResult]=useState([])
  useEffect(()=>{
if(text.length>0){
    debouncedFN()
}
else{
   setResult([])
}
  },[text])
  const debounce = (fn) => {
    let timer;
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
     timer= setTimeout(() => {
        fn();
      }, 300);
    };
  };
  const ApiCall = () => {
    const result = api.filter((e) => e.includes(text));
    console.log(result)
    setResult(result);
    return
  };

  const changeState = (e) => {
    console.log(e.currentTarget.value);
    setText(e.currentTarget.value);
  };
  const debouncedFN = debounce(ApiCall);

  return (
    <div>
      <input placeholder="search" onChange={changeState} />
      {
       result?.map((e)=>{
        return(
            <div key={e}>{e}</div>
        )
       })
      }
    </div>
  );
};
