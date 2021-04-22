import React from "react";
import { useHistory } from "react-router";
import Button from "../../UI/Button/Button";

import { toast } from "react-toastify";

import classes from "./CheckoutOrderButton.module.css";
const CheckoutOrderButton = () => {
    const history = useHistory();
    const orderButtonClickHandler = () => {
        toast.success(`Yay! Application Completed :)`, {
            position: "top-right",
            style: { height: "80px", width: "293px", float: "right" },
            autoClose: 2500,
        });
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
