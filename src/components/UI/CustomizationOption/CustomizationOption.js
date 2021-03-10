import React from "react";
import classes from "./CustomizationOption.module.css";
import smallOption from "../../../assets/images/options/small.webp";
import mediumOption from "../../../assets/images/options/medium.webp";
import largeOption from "../../../assets/images/options/medium.webp";
import aLaCarte from "../../../assets/images/options/alacarte.webp";

const CustomizationOption = (props) => {
    let description = props.description ? <p>{props.description}</p> : null;
    let img;
    switch (props.name) {
        case "Small":
            img = <img src={smallOption} alt="Small" />;
            break;
        case "Medium":
            img = <img src={mediumOption} alt="Medium" />;
            break;
        case "Large":
            img = <img src={largeOption} alt="Large" />;
            break;
        case "A La Carte":
            img = <img src={aLaCarte} alt="A La Carte" />;
            break;
        default:
            img = null;
    }
    return (
        <div className={classes.CustomizationOption}>
            <div className={classes.CustomizationOptionImage}>{img}</div>
            <div className={classes.CustomizationOptionDescription}>
                <h4>{props.name}</h4>
                {description}
                <span>{props.calories}</span>
            </div>
        </div>
    );
};

export default CustomizationOption;
