import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Clicky Game</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link">Current Score: {props.score}</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link">High Score: {props.highScore}</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;