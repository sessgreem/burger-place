import React from "react";
import classes from "./CheckoutExtraItems.module.css";
import CheckoutExtraItem from "./CheckoutExtraItem/CheckoutExtraItem";
const CheckoutExtraItems = () => {
    return (
        <div className={classes.CheckoutExtraItems}>
            <h2>Add to order</h2>
            <div>
                <CheckoutExtraItem />
                <CheckoutExtraItem />
            </div>
        </div>
    );
};

export default CheckoutExtraItems;
