import React, { useState } from 'react'
import { FileExploler } from './FileExploler';
const object = {
    id: 1,
    name: "root",
    isFolder: true,
    items: [
      {
        id: 2,
        name: "public",
        isFolder: true,
        items:[
          {
            id:3,
            name:"image.png",
            isFolder:false,
            items:[]
          }
        ]
      },
  
      {
        id: 4,
        name: "src",
        isFolder: true,
        items:[
          {
            id:5,
            name:"app.jsx",
            isFolder:false,
            items:[]
          }
        ]
      },
  
  
  
  
    ],
  };
export const MainFileExpoler = () => {
    const [obj,setObj]=useState(object)
  return (
    <div><FileExploler obj={obj} /></div>
  )
}
