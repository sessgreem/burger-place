import React from "react";
import classes from "./SectionItem.module.css";
import burger from "../../../assets/images/burgers/whopper-cheeseburger.png";

const SectionItem = (props) => {
    return (
        <div className={classes.SectionItem}>
            <div className={classes.SectionItemImage}>
                <img src={burger} alt="Burger" />
                {/* <img src={props.imgURL} alt="Item" /> */}
            </div>
            {/* ! Needs to be a link that sends itemOptions as props */}
            <div className={classes.SectionItemDescription}>
                <h3>{props.name}</h3>
                <span>{props.calories} Cal</span>
            </div>
        </div>
    );
};

export default SectionItem;
