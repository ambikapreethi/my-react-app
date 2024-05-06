import React,{useState} from "react";

export default function Condition()
{
    const[no,setNo]=useState(56);
    return(
    <div>
        {no!=56 &&
        <p>hi ambika</p>}
    </div>)
    
}