import React from "react";
import classes from "./CheckoutCartItem.module.css";

const CheckoutCartItem = () => {
    return (
        <li className={classes.CheckoutCartItem}>
            <div className={classes.CheckoutCartItemInfo}>
                <div>
                    {/* <span>{props.name}</span> */}
                    <span>Whopper Meal Medium</span>
                    <p>
                        Whopper
                        <br />
                        Medium Classic Fries
                        <br />
                        Combo Medium Coca-Cola
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
