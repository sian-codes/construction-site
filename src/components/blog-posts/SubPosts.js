 import {Link} from "react-router-dom";
import "./subPosts.css";
 import CompImg from "../../assets/blogImages/comp.jpeg";
 import React from "react";


export default function SubPosts() {
    return (
<div className="grid-container">
    <div className="row">
         <div className="sub-post-1">
             <Link to="/Working-From-Home">
                 <article className="sub-post-1">
                     <div className="sub-post-1">
                         <div className="sub-post-1-image">
                             <img className="image" src={CompImg} alt="post" />
                         </div>
                         <div>
                             <div className="sub-post-1_meta-2">
                                 <div className="post_cat">Lifestyle</div>
                                 <p className="sub-post-title-1">
                                     Working From Home
                                 </p>
                                 <p className="sub-post-subtitle-1">
                                     How to work from home, stay efficient, stay focused and get the work done.
                                 </p>
                             </div>
                         </div>
                     </div>
                 </article>
             </Link>
             <Link to="/lorem-ipsum-dolor-sit">
                 <article className="sub-post-1">
                     <div className="sub-post-1">
                         <div className="sub-post-1-image">
                             <img className="image" src={CompImg} alt="post" />
                         </div>
                         <div>
                             <div className="sub-post-1_meta-2">
                                 <div className="post_cat">Lifestyle</div>
                                 <p className="sub-post-title-1">Best Places to Walk in the Uk</p>
                                 <p className="sub-post-subtitle-1">
                                     Wheres the best woodland adventure in the UK to trek with your dog
                                 </p>
                             </div>
                         </div>
                     </div>
                 </article>
             </Link>
             <Link to="/lorem-ipsum-dolor-sit">
                 <article className="sub-post-1">
                     <div className="sub-post-1">
                         <div className="sub-post-1-image">
                             <img className="image" src={CompImg} alt="post" />
                         </div>
                         <div>
                             <div className="sub-post-1_meta-2">
                                 <div className="post_cat_code">Coding</div>
                                 <p className="sub-post-title-1">My Learning Journey</p>
                                 <p className="sub-post-subtitle-1">
                                     How I changed Career at 33, became a full stack software engineer and started building my brand.
                                 </p>
                             </div>
                         </div>
                     </div>
                 </article>
             </Link>
         </div>
    </div>
</div>
)};
