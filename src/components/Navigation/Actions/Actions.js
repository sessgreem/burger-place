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
                <div className={classes.ActionsCart}>
                    ${itemsPrice.toFixed(2)}
                    <svg className={classes.cartIcon} viewBox="0 0 20 22">
                        <title>Bag Icon</title>
                        <path d="M18.84 0H1.2Q0 17.72 0 19.56A2.76 2.76 0 0 0 1.91 22h16.25A2.39 2.39 0 0 0 20 19.56Q20 17.71 18.84 0zM15 6.7a5.27 5.27 0 0 1-5 5.52A5.27 5.27 0 0 1 5 6.7V3.29a.82.82 0 0 1 .77-.85.82.82 0 0 1 .77.85V6.7A3.64 3.64 0 0 0 10 10.52a3.64 3.64 0 0 0 3.46-3.82V3.29a.77.77 0 1 1 1.54 0z"></path>
                    </svg>
                </div>
            </Button>
        </div>
    );
};

export default Actions;
