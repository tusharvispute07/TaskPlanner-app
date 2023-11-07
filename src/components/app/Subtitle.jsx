import React from "react";

export default function Subtitle(){

    const options = {
        weekday: "long",
        day: "numeric",
        month: "short"
    }
    const date = new Date().toLocaleString("en-US", options)
    return(
    <>
     <p>{date}</p>
    </>
    )
}