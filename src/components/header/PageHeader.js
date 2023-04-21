import React from "react";
import { Link } from "react-router-dom";
import "./pageHeader.css";
import {thin} from "@fortawesome/fontawesome-svg-core/import.macro";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../assets/logow.png";

export default function PageHeader() {
    return (
        <div className='fade-in'>
            <nav>
                <div className="nav-bar">
                    <img src={logo} className="logo" alt="logo"/>
                    <div className="icons">
                    <div className="nav-bar-home">
                        <Link
                        className="btn-contact"
                        title="This is your tooltip"
                        style={{ textDecoration: "none" }}
                        to={"/"}
                    >&nbsp;<FontAwesomeIcon icon={thin('home')} />
                    </Link>
                    </div>
                    <div>
                        <Link
                            className="btn-contact"
                            title="This is your tooltip"
                            style={{ textDecoration: "none" }}
                            to={"/blog"}
                        >
                            &nbsp; <FontAwesomeIcon icon={thin('book')} />
                        </Link>
                    </div>
                    <div>
                        <a className="btn-contact"  title="This is your tooltip" href="mailto:sian@siancodes.com" target="_blank">&nbsp;<FontAwesomeIcon icon={thin('envelope')}/></a>
                    </div>
                    <div>
                        <a className="btn-contact" title="This is your tooltip" href="https://github.com/sian-codes" target="_blank">&nbsp;<FontAwesomeIcon icon={thin("code")}/></a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
