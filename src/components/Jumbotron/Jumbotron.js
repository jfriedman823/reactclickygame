import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Clicky Game!</h1>
            <p className="lead">Click an image to earn points, but don't click an image more than once.</p>
            <p>{props.guessResult}</p>
        </div>
    </div>
);

export default Jumbotron;