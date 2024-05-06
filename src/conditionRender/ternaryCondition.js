import React,{useState} from "react";

export default function Terncondition()
{
    const[no,setNo]=useState(56);
    return(
    <div>
        {no==56 ? <p>hi ambika</p>:<p>hi preethi</p>}
    </div>)
    
}
