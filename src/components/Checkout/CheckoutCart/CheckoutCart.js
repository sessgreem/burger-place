import React from "react";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutCart.module.css";
import { useHistory } from "react-router-dom";

const CheckoutCart = (props) => {
    let history = useHistory();
    const addItemsButtonHandler = () => {
        history.push("/menu");
    };
    return (
        <div className={classes.CheckoutCart}>
            <h2>Your Cart</h2>
            <ul>{props.items}</ul>
            <Button btnType="Secondary" clicked={addItemsButtonHandler}>
                Add items
            </Button>
            <div className={classes.CheckoutCartTotals}>
                <div>
                    <span>Subtotal </span>
                    <span>${props.price.toFixed(2)}</span>
                </div>
                <div>
                    <span>Tax</span>
                    <span>
                        ${((7.46666666 * props.price) / 100).toFixed(2)}
                    </span>
                </div>
                <hr />
                <div>
                    <span>Total*</span>
                    <span>
                        $
                        {(
                            (7.46666666 * props.price) / 100 +
                            props.price
                        ).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutCart;
