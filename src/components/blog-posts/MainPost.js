import React from "react";
import "./mainPost.css";
import postImg from '../../assets/blogImages/mummy.jpg';
import {Link} from "react-router-dom";

const MainPost = () => {
    return (
        <div className="container pt-3">
            <div className="row">
                <Link to="/out-of-hours-tour">
        <article className="main-post">
            <div className="main-post-img">
                <img className="image" src={postImg} alt="post" />
            </div>
            <div className="main-post-content">
                <div className="main-post-title">
                    An Out of Hours Tour of Life and Death in Egypt
                </div>
                <div className="main-post-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit cursus risus at ultrices mi tempus. Diam vulputate ut pharetra sit amet aliquam id. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. A diam maecenas sed enim ut sem viverra aliquet. Metus dictum at tempor commodo. Risus quis varius quam quisque id diam vel quam. Ut enim blandit volutpat maecenas volutpat. Turpis in eu mi bibendum neque egestas. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Cursus turpis massa tincidunt dui ut ornare lectus.
                </div>
            </div>
        </article>
                </Link>
                </div>
        </div>
    );
};

export default MainPost;
