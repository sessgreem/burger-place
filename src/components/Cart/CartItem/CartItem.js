import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
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
                {/* <p>
                    {props.name}
                    <br />
                    Medium Classic Fries
                    <br />
                    Combo {props.size} Coca-Cola {props.drink}
                </p> */}
                <span>${props.price.toFixed(2)}</span>
            </div>
            <div className={classes.CartItemActions}>
                <p onClick={() => props.removeClicked(props.id)}>Remove</p>
                {/* incrementors */}
            </div>
        </div>
    );
};

export default CartItem;
