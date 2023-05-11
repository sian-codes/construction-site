import "./home.css";
import logo from "../../assets/logo.png";
import dp from "../../assets/me.png";
import code from "../../assets/laptop.png";
import holiday from "../../assets/sp.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {thin} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Home() {
    return (
       <div className="home-page">
           <div className="intro">
           <img src={logo} className="logo-home" alt="logo"/>
           <h1> Welcome to my website, let me tell you a little bit about myself</h1>
           <div className="skill-row">
               <div className="profile">
                   <img className="display-pic" src={dp} alt="my-profile-img"/>
                   <p className="intro">I am a full stack developer who loves the MERN stack, is fueled by coffee, an avid gamer and hikes with my dog Ghost.</p>
               </div>
           </div>
           </div>
           <hr className="line" />
           <div className="skills">
               <h2>My Skills.</h2>
               <div className="skill-row">
                   <img className="laptop" src={code} alt="code-img"/>
                   <h3>Design & Development</h3>
                   <p>  I completed my Bachelors Degree in Computer Science in 2020, I fell for the MERN stack in my second year of my degree and afterwards took
                       a course in the MERN stack development. I started my FinTech career in September 2021 and since then I have had the opportunity to learn Kotlin, Java,
                       React Native and Swift.</p>
               </div>
               <div className="skill-row">
                   <img className="holiday" src={holiday} alt="holiday"/>
                   <h3>Hobbies!</h3>
                   <p>When I'm not putting my skills to use at work or building my personal projects, I love to play Destiny,
                       become the Pokémon master or improve my island on Animal Crossing! I also love to travel, my most recent trip was
                       to Singapore for Chinese New Year</p>
               </div>
               <hr className="line" />
               <div className="skill-row">
                   <h2>Get In Touch</h2>
                   <a className="contact-me"  title="Contact me" href="mailto:sian@siancodes.com"><FontAwesomeIcon icon={thin('envelope')}/></a>
               </div>
           </div>
           <div className="footer">
               <a className="footer-link" href="https://www.linkedin.com/in/si%C3%A2n-kearley-32151986/">LinkedIn</a>
               <p></p>
               <a className="footer-link" href="https://www.instagram.com/sian.codes/">Instagram</a>
               <p className="copyright">© 2023 Siân Kearley</p>
           </div>
       </div>
        )
};
