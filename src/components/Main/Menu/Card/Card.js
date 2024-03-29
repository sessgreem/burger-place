import classes from "./Card.module.css";
import React from "react";

const Card = (props) => {
    return (
        <div
            className={classes.Card}
            onClick={() => props.cardClickedHandler(props.name)}
        >
            <div className={classes.CardImage}>
                <img src={props.img} alt="" />
            </div>
            <div className={classes.CardDescription}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;
