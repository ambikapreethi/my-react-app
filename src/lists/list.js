import React,{useState} from "react";

export default function List()
{
    const[fruits,setFruits]=useState([{id:1,name:"apple"},
                                      {id:2,name:"guava"},
                                      {id:3,name:"orange"}]);
    const[no,setNo]=useState([1,2,3,4]);
    return(
    <div>
        {fruits.map((fruits)=><p>{fruits.id + " " +fruits.name}</p>)}
        {no.map((item)=><li key="id">{item}</li>)}   
     
    </div>)
    
}
