import React from "react";
import Incrementor from "../../UI/Incrementor/Incrementor";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    let mealSize = null;
    if (props.size !== "A La Carte" && props.size) {
        mealSize = `Meal ${props.size}`;
    }
    let bonusDescription = null;
    if (props.hasDescription && props.size !== "A La Carte") {
        bonusDescription = (
            <p>
                {props.name}
                <br />
                {props.size} {props.side}
                <br />
                {props.size} {props.drink}
            </p>
        );
    }
    return (
        <div className={classes.CartItem}>
            <div className={classes.CartItemDescription}>
                <div>
                    <span className={classes.CartItemDescriptionHeading}>
                        {props.name} {mealSize}
                    </span>
                    {bonusDescription}
                </div>
                <div>
                    <span>${props.price.toFixed(2)}</span>
                </div>
            </div>
            <div className={classes.CartItemActions}>
                <p onClick={() => props.removeClicked(props.id)}>Remove</p>
                <Incrementor
                    incrementClicked={() =>
                        props.incrementClicked(props.id, props.quantity)
                    }
                    decrementClicked={() =>
                        props.decrementClicked(props.id, props.quantity)
                    }
                    number={props.quantity}
                />
            </div>
        </div>
    );
};

export default CartItem;
