import React from "react";

export default function Input(props){
    return (
        <>
        <input onChange={(event)=>props.onInput(event)} type="text" placeholder="Enter an item" value={props.value}/>
        </>   
    )
}