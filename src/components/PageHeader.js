import React from "react";
import { Link } from "react-router-dom";
import "./pageHeader.css";
import {thin} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../assets/logow.png";

export default function PageHeader() {
    return (
        <div>
            <nav>
                <div className="nav-bar">
                    <div className="nav-bar-home">
                        <Link
                        className="btn-contact"
                        style={{ textDecoration: "none" }}
                        to={"/"}
                    >
                        Home <FontAwesomeIcon icon={thin('home')} />
                    </Link>
                    </div>
                    <div>
                        <Link
                            className="btn-contact"
                            style={{ textDecoration: "none" }}
                            to={"/blog"}
                        >
                             Blog <FontAwesomeIcon icon={thin('book')} />
                        </Link>
                    </div>
                    <img src={logo} className="logo" alt="logo"/>
                    <div>
                        <a className="btn-contact" href="mailto:sian@siancodes.com" target="_blank">Contact Me <FontAwesomeIcon icon={thin('envelope')}/></a>
                    </div>
                    <div>
                        <a className="btn-link" href="https://github.com/sian-codes" target="_blank">GitHub <FontAwesomeIcon icon={thin("code")}/></a>
                    </div>
                </div>
            </nav>
        </div> // using <a> opens a new page would it not be easier for a smoother transition like <Link>?
    );
}
