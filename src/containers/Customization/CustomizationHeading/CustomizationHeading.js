import React from "react";
import classes from "./CustomizationHeading.module.css";
const CustomizationHeading = (props) => {
    return (
        <div className={classes.CustomizationHeading}>
            <h3>{props.name}</h3>
            <p>
                {props.description}
                {/* ? next 2 have to be removed */}
                <br /> *Weight based on pre-cooked patty
                <br />
                Medium Drink and Medium Side Included
            </p>
        </div>
    );
};

export default CustomizationHeading;
