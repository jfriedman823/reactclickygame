import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <span onClick={() => props.selectCharacter(props.id)}></span>
    </div>
);

export default CharacterCard;