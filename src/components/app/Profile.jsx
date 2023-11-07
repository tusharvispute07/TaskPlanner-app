import React from "react";
import Title from "./Title";
import Image from "./Image";
import Subtitle from "./Subtitle";

export default function Profile(props){

    return(
        <div className="profile">
            <div className="details">
                <Title title={props.title}/>
                <Subtitle />
            </div>
            <Image url="../profile-pic.jpg"/>
        </div>
    )
}