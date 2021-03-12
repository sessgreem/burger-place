import React from "react";
import classes from "./CartItem.module.css";

const CartItem = () => {
    const name = "Whopper Meal Medium";
    const price = "$15.32";
    return (
        <div className={classes.CartItem}>
            <div className={classes.CartItemHeading}>
                <span>{name}</span>
                <span>{price}</span>
            </div>
            <div className={classes.CartItemActions}>
                <p>Remove</p>
                {/* incrementors */}
            </div>
        </div>
    );
};

export default CartItem;
