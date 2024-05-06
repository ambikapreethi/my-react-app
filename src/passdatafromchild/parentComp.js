import React, { useState } from "react";
import Child from "./childComp";

export default function Parent()
{
    const[data,setData]=useState("");
    
    const dataFromChild=(childData)=>
    {
            setData(childData);
    }

    return(
            <div>
            
                <Child data={dataFromChild}/>
                
                   <p> data from child:{data}</p>
                
            </div>
    )

    
}