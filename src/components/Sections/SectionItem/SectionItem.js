import React from "react";
import classes from "./SectionItem.module.css";
import burger from "../../../assets/images/burgers/whopper-cheeseburger.png";
import { Link } from "react-router-dom";
const SectionItem = (props) => {
    return (
        <Link to={`/sections/${props.section}/${props.name}`}>
            <div className={classes.SectionItem}>
                <div className={classes.SectionItemImage}>
                    <img src={burger} alt="Burger" />
                    {/* <img src={props.imgURL} alt="Item" /> */}
                </div>
                <div className={classes.SectionItemDescription}>
                    <h3>{props.name}</h3>
                    <span>{props.calories} Cal</span>
                </div>
            </div>
        </Link>
    );
};

export default SectionItem;
