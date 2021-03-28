import React from "react";
import classes from "./CustomizationOption.module.css";

const CustomizationOption = (props) => {
    const required = props?.required ? <div>Required</div> : null;

    const attachedClasses = [];
    if (props.heading !== "Combo Size") {
        attachedClasses.push(classes.CustomizationItems);
    }
    return (
        <div className={classes.CustomizationOption}>
            <div className={classes.CustomizationOptionHeading}>
                <h4>{props.heading}</h4>
                {required}
            </div>
            <div className={attachedClasses}> {props.options}</div>
        </div>
    );
};

export default CustomizationOption;
