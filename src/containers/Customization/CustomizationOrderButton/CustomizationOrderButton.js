import React from "react";
import classes from "./CustomizationOrderButton.module.css";
import Button from "../../../components/UI/Button/Button";
const CustomizationOrderButton = () => {
    return (
        <div className={classes.CustomizationOrderButton}>
            <span>Nutritional Information</span>
            <Button btnType="Order">Check Availability</Button>
        </div>
    );
};

export default CustomizationOrderButton;
