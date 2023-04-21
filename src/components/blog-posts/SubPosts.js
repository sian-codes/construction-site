import "./subPosts.css";
import React from "react";
import postImg from "../../assets/blogImages/singapore1.jpeg";


export default function SubPosts() {
    return (
        <div className='blog-post'>
            <img className="blog-post-img" src={postImg} alt="post" />
                <div className='blog-post-content'>
                 <h1 className='blog-post-title'>
                     Lorem ipsum dolor sit amet
                 </h1>
                 <h2 className='blog-post-subtitle'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 </h2>
             <button>Read More</button>
         </div>
        </div>
)};
