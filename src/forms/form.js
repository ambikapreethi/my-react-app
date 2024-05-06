import React, { useState } from "react";
import "../forms/form.css";

export default function Createform()
{
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[address,setAddress]=useState("");

    const Handlenamechange=(e)=>
    {
     setName(e.target.value);
     }

     const Handleagechange=(e)=>
     {
      setAge(e.target.value);
      }

      const Handleaddresschange=(e)=>
      {
       setAddress(e.target.value);
       }
  

    const FormSubmit=(e)=>
    {
        e.preventDefault();
        alert(name + " "+ age + " "+address);
        setName("");
        setAge("");
        setAddress("");
        
    }

    return(
        <div>
            <form onSubmit={(e)=>FormSubmit(e)}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={(e)=>Handlenamechange(e)}></input><br/>
                <label>age:</label>
                <input type="number" name="age" value={age} onChange={(e)=>Handleagechange(e)}/><br/>
                <label>address:</label>
                <textarea name="address" value={address} onChange={(e)=>Handleaddresschange(e)}></textarea><br/>
                <button className="butt" type="submit">submit</button>
            </form>
        </div>
    )
}