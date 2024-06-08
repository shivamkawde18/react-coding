import React, { useState } from "react";

export const FileExploler = ({obj}) => {
  // const [isOpen, setOpen] = useState();
  const [currentObject,setCurrentObject]=useState(null)
  const [expand,setExpand]=useState(false)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {obj.isFolder&&
      <div
        style={{
          display: "flex",
          gap: 10,
        }}

        onClick={()=>{
          setCurrentObject(obj)
          setExpand(!expand)
        }}
      >
        <div>🗂</div>
        <div
          // onClick={() => {
          //   setOpen(!isOpen);
          // }}
        >
          {obj?.name}
        </div>
      </div>
      

}



<div style={{
  display:expand?"block":"none"
}}>
      <div
        style={{
          display: "flex",
          gap: 10,
        }}

        onClick={()=>{
          setCurrentObject(obj)
        }}
      >
        <div>📄</div>
        <div
          // onClick={() => {
          //   setOpen(!isOpen);
          // }}
        >
          {obj?.name}
        </div>
      </div>
      


{
        obj?.items.map((value ,index)=>{
          return <FileExploler key={index} obj={value} />
        })
      }
</div>

{/* 
      {
        obj.items.map((value ,index)=>{
          return <FileExploler key={index} obj={value} />
        })
      } */}
      {/* <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <div>🗂</div>
        <div>components</div>
      </div> */}
    </div>
  );
};
