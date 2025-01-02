import "./home.css";
import Hobbies from "../../components/banners/Hobbies";
import Introduction from "../../components/banners/Introduction";
import Portfolio from "../../components/banners/Portfolio";
import React from "react";

export default function Home() {
    return (
        <div>
            <Introduction/>
            <h2> What I like to do </h2>
            <Hobbies/>
            <Portfolio/>
        </div>
    )
};
