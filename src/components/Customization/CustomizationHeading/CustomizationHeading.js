import React, { Fragment } from "react";
import classes from "./CustomizationHeading.module.css";
const CustomizationHeading = (props) => {
    const weight = <p> *Weight based on pre-cooked patty</p>;

    const selected = props.selectedSize;
    const additionalInformation =
        selected !== "A La Carte" ? (
            <Fragment>
                {weight}
                <p>
                    <span>
                        {props.selectedSize} Drink and {props.selectedSize} Side
                        Included
                    </span>
                </p>
            </Fragment>
        ) : (
            <Fragment>
                {weight}
                <p>Entree only</p>
            </Fragment>
        );

    const sizeHeading = selected !== "A La Carte" ? selected : null;

    return (
        <div className={classes.CustomizationHeading}>
            <h3>
                {props.name} {sizeHeading}
            </h3>
            <p>{props.description}</p>
            {selected && additionalInformation}
            <div className={classes.CustomizationHeadingPrice}>
                ${props.price}
            </div>
        </div>
    );
};

export default CustomizationHeading;
