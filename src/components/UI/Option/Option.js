import React from "react";
import classes from "./Option.module.css";
import smallOption from "../../../assets/images/options/small.webp";
import mediumOption from "../../../assets/images/options/medium.webp";
import largeOption from "../../../assets/images/options/large.webp";
import aLaCarte from "../../../assets/images/options/alacarte.webp";

const Option = (props) => {
    const description = props.description ? <p>{props.description}</p> : null;

    let img;
    switch (props.name) {
        case "Small":
            img = <img src={smallOption} alt="" />;
            break;
        case "Medium":
            img = <img src={mediumOption} alt="" />;
            break;
        case "Large":
            img = <img src={largeOption} alt="" />;
            break;
        case "A La Carte":
            img = <img src={aLaCarte} alt="" />;
            break;
        default:
            img = null;
    }

    const optionClasses = [classes.Option];

    const isSelected = props.selected === props.name;

    if (isSelected) {
        optionClasses.push(classes.Selected);
    }

    return (
        <div
            onClick={() => props.changedSize(props.name)}
            className={optionClasses.join(" ")}
        >
            <div className={classes.CustomizationOptionImage}>{img}</div>
            <div className={classes.CustomizationOptionDescription}>
                <h3>{props.name}</h3>
                {description}
                <span>{props.calories} Cal</span>
            </div>
        </div>
    );
};

export default Option;
