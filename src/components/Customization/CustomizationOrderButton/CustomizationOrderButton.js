import React from "react";
import classes from "./CustomizationOrderButton.module.css";
import Button from "../../UI/Button/Button";
const CustomizationOrderButton = (props) => {
    return (
        <div className={classes.CustomizationOrderButton}>
            <Button clicked={props.orderClicked} btnType="Order">
                Add to order
            </Button>
        </div>
    );
};

export default CustomizationOrderButton;
