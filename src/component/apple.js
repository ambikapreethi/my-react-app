import React from "react";
import { useState } from "react";
import "../apple/apple.css";
        

function Apple()
{
    const[name,setName]=useState("ambika");
    const[count,setCount]=useState(0);

    const Sand=()=>
    {
        return(
            <div>
          {setName("preethi")};
          {setCount(count+2)};
         </div>
        )   
    }

    return(
        <div>
            <p className="apple">{name+":"+ " " +count}</p>
            
            <button onClick={Sand}>Click me</button>
        </div>

    )



}
export default Apple;
