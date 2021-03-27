import React from "react";

export default function Phonetic(props){
    return (
        <div className="phonetic">
            {props.phonetic.text}
            <br />
            <a href={props.phonetic.audio} target="_blank">Listen</a>
        </div>
    );
}