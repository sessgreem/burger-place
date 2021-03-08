import React from "react";
import classes from "./CustomizationOption.module.css";

const CustomizationOption = (props) => {
    return (
        <div className={classes.CustomizationOption}>
            <div className={classes.CustomizationOptionImage}>
                <img src={props.imgURL} alt="Size" />
            </div>
            <div className={classes.CustomizationOptionDescription}>
                <h4>{props.optionName}</h4>
                <p>{props.optionDescription}</p>
                <span>{props.optionCalories}</span>
            </div>
        </div>
    );
};

export default CustomizationOption;
