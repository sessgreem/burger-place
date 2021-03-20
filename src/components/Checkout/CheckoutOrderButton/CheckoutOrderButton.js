import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutOrderButton.module.css";
const CheckoutOrderButton = () => {
    return (
        <div className={classes.CheckoutOrderButton}>
            <Button btnType="Order">Continue</Button>
        </div>
    );
};

export default CheckoutOrderButton;
