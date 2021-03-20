import React from "react";
import classes from "./CustomizationHeading.module.css";
const CustomizationHeading = (props) => {
    let additionalInformation =
        props.selectedSize !== "A La Carte" ? (
            <span>
                {props.selectedSize} Drink and {props.selectedSize} Side
                Included
            </span>
        ) : (
            <span>Entree only</span>
        );

    let size = null;
    if (props.selectedSize !== "A La Carte") {
        size = props.selectedSize;
    }
    return (
        <div className={classes.CustomizationHeading}>
            <h3>
                {props.name} {size}
            </h3>
            <p>
                {props.description}
                <br /> *Weight based on pre-cooked patty
                <br />
                {additionalInformation}
            </p>
            <div className={classes.price}>${props.price}</div>
        </div>
    );
};

export default CustomizationHeading;
