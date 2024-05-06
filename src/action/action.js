import { Component } from "react";
import React from "react";

class Action extends React.Component
{
    // constructor()
    // {
    //     super();
        state={name:"ambika",
                    age:35,
                    arr:[1,2,3],
                obj:{name:"raji",age:45,address:{no:2,st:"new st"}}};
        
    // }

    render(){
        
        return(
            <div>{this.state.name + " "+ this.state.age}
            <p>hello ambika</p>
            <p>{this.state.arr[1]}</p>
            {this.state.arr.map((item)=><li key="index">{item}</li>)}
            <p>{this.state.obj.name + " "+this.state.obj.age + " " + this.state.obj.address.st}</p>
            
            </div>

        )
    }
}
export default Action; 