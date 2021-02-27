import classes from "./Card.module.css";
import React from "react";

const Card = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.CardImage}>
                {/* ! src doesnt work - needs to be resolved (from Menu)*/}
                <img src="" alt="Item" />
            </div>
            <div className={classes.CardDescription}>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;
