import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {thin} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {AuthContext} from "../../authorisedUser/components/context/auth-context";

export default function Header() {
    const {setUserInfo,userInfo} = useContext(AuthContext);
    useEffect(() => {
        fetch('http://localhost:4000/blog/create-post', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    return (
        <header>
            <nav>
                <div className="header">
                    <img src={logo} className="logo" alt="logo"/>
                    &nbsp;
                    <div className="nav-bar-home">
                        <Link
                        className="btn-contact"
                        title="contact me"
                        style={{ textDecoration: "none" }}
                        to={"/"}
                    >
                    <FontAwesomeIcon icon={thin('home')} />
                    </Link>
                    <Link
                        className="btn-blog"
                        title="This is your tooltip"
                        style={{ textDecoration: "none" }}
                        to={"/blog"}
                    ><FontAwesomeIcon icon={thin('book')} />
                    </Link>
                    <a className="btn-contact"  title="Contact me" href="mailto:sian@siancodes.com" target="_blank"><FontAwesomeIcon icon={thin('envelope')}/></a>
                    <a className="btn-github" title="GitHub" href="https://github.com/sian-codes" target="_blank"><FontAwesomeIcon icon={thin("code")}/></a>
                        <Link
                            className="btn-logout"
                            title="Logout"
                            to={"/blog"}
                            onClick = {logout}
                        ><FontAwesomeIcon icon={thin("arrow-right-from-bracket")} /></Link>
                  </div>
                </div>
        </nav>
    </header>
    )}
