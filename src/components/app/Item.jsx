import React from "react";

export default function Item(props){
    return(
        <>
        <li onClick={()=>props.onCheck(props.id)} id={props.id} >{props.item}</li>
        </>
    )
}