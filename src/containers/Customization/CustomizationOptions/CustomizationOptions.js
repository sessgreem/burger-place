import React from "react";
import classes from "./CustomizationOptions.module.css";

const CustomizationOptions = (props) => {
    return (
        <div className={classes.CustomizationOptions}>
            <div>
                <h4>Combo Size</h4>
            </div>
            {props.options}
        </div>
    );
};

export default CustomizationOptions;
