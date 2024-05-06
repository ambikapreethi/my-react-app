import React, { useEffect, useState } from "react";
import { Group } from "../group/group";
import "../component/comp.css"
import Action from "../action/action";
import Apples from "../apple/apples";
import Dropdown from "../DropdownAndTable/dropdown";
import Table from "../DropdownAndTable/table";

function Comp()
{
    const [fruits,setFruits]=useState(["apple","orange","grapes"]);
    const[obj,setObj]=useState({name:"ambika",age:34,no:25});
    

    const Hello=()=>
    {
        return <p>hi preethi</p>
    }
    const World=(a)=>
    {
        
        alert(a.type);
        setObj(obj.name="mallika");
    }

const[count,setCount]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)},1000)

            },[]
        )

        const newFruits=fruits;
        newFruits.push("papaya");

    useEffect(()=>{setFruits(newFruits)},[]
     )

     var enable=false;

     if(enable==true){
        return <Apples/>
     }
     else
        {       
    return (

    <div>
        <p>hello ambika</p>
        {/* <p>{fruits}</p> */}
        <p>{count}</p>
        <h4>hi beautiful world</h4>
        
        <p>{obj.age + " "+obj.name + " "+obj.no}</p>
        <Group a="ambika" b="rani"/>
        {Hello()}

        <button className="butt" onMouseOver={(event)=>World(event)}>click me</button>
        
            {/* {
            fruits.map((item,index)=><li key="index">{item}</li>)
             } */}

             {fruits};
  
         </div> 
        
)
}}
export default Comp;


