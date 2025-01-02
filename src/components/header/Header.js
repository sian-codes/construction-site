import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {thin} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";

export default function Header() {

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
                        <a className="btn-contact"  title="Contact me" href="mailto:sian@siancodes.com" target="_blank"><FontAwesomeIcon icon={thin('envelope')}/></a>
                        <a className="btn-github" title="GitHub" href="https://github.com/sian-codes" target="_blank"><FontAwesomeIcon icon={thin("code")}/></a>
                    </div>
                </div>
            </nav>
        </header>
    )}
