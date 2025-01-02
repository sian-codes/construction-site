import './introduction.css';
import me from "../../assets/me.png";
import React from "react";

export default function Introduction() {
    return (
        <div className="introduction">
            <h1>
                Hello! I'm Siân
            </h1>
            <p>
                I'm a full stack software engineer who loves gaming, reading, traveling and writing code.
            </p>
            <img src={me} className="me" alt="me"/>
        </div>
    )
}
