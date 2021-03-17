import React from "react";
import classes from "./CheckoutCartItem.module.css";

const CheckoutCartItem = (props) => {
    return (
        <li className={classes.CheckoutCartItem}>
            <div className={classes.CheckoutCartItemInfo}>
                <div>
                    <span>Whopper Meal {props.size} </span>
                    <p>
                        {props.name}
                        <br />
                        Medium Classic Fries
                        <br />
                        Combo {props.size} Coca-Cola {props.drink}
                    </p>
                </div>
                <div>
                    {/* {props.price} */}
                    <span>$8.49</span>
                </div>
            </div>
            <div className={classes.CartItemActions}>
                <p>Remove</p>
                {/* incrementors */}
            </div>
        </li>
    );
};

export default CheckoutCartItem;
