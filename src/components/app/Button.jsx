import React from "react";

export default function Button(props){
    return(
    <>
        <button onClick={props.onClick} id="form-button" type="submit">Add</button>
    </>
)
}