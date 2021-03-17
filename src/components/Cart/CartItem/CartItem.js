import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const price = "$15.32";

    let mealSize = null;
    if (props.size !== "À La Carte") {
        mealSize = `Meal ${props.size}`;
    }

    return (
        <div className={classes.CartItem}>
            <div className={classes.CartItemHeading}>
                <span>
                    {props.name} {mealSize}
                </span>
                <span>{price}</span>
            </div>
            {/* ? maybe this can be used in incrementor in checkout component  */}
            <div className={classes.CartItemActions}>
                <p>Remove</p>
                {/* incrementors */}
            </div>
        </div>
    );
};

export default CartItem;
