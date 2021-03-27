import React, { Fragment } from "react";
import classes from "./CustomizationOptions.module.css";

const CustomizationOptions = (props) => {
    return (
        <Fragment>
            <div className={classes.CustomizationOptions}>
                <div className={classes.CustomizationOptionsHeading}>
                    <h4>Combo Size</h4>
                    <div>Required</div>
                </div>
                {props.sizes}
            </div>
            <div className={classes.CustomizationOptions}>
                <div className={classes.CustomizationOptionsHeading}>
                    <h4>Combo Sides</h4>
                </div>
                <div className={classes.CustomizationItems}>{props.sides}</div>
            </div>
            <div className={classes.CustomizationOptions}>
                <div className={classes.CustomizationOptionsHeading}>
                    <h4>Combo Drinks</h4>
                </div>
                <div className={classes.CustomizationItems}>{props.drinks}</div>
            </div>
        </Fragment>
    );
};

export default CustomizationOptions;
