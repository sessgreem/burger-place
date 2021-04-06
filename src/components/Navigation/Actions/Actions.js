import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./Actions.module.css";
import { useSelector } from "react-redux";
const Actions = (props) => {
    const itemsPrice = useSelector((state) => state.cart.itemsPrice);
    return (
        <div className={classes.Actions}>
            <Button btnType="Primary" clicked={props.signUpClicked}>
                Sign Up
            </Button>
            <Button btnType="Secondary" clicked={props.cartClicked}>
                ${itemsPrice.toFixed(2)}
            </Button>
        </div>
    );
};

export default Actions;
