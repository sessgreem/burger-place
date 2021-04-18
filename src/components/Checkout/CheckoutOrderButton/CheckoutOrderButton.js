import React from "react";
import { useHistory } from "react-router";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutOrderButton.module.css";
const CheckoutOrderButton = () => {
    const history = useHistory();
    const orderButtonClickHandler = () => {
        history.push("/about");
    };
    return (
        <div className={classes.CheckoutOrderButton}>
            <Button btnType="Order" clicked={orderButtonClickHandler}>
                Continue
            </Button>
        </div>
    );
};

export default CheckoutOrderButton;
