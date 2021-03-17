import React from "react";
import classes from "./CustomizationOrderButton.module.css";
import Button from "../../UI/Button/Button";
const CustomizationOrderButton = (props) => {
    return (
        <div className={classes.CustomizationOrderButton}>
            <span>Nutritional Information</span>
            <Button clicked={props.orderClicked} btnType="Order">
                Check Availability
            </Button>
        </div>
    );
};

export default CustomizationOrderButton;
