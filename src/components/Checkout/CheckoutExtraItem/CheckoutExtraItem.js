import React from "react";
import classes from "./CheckoutExtraItem.module.css";
import burger from "../../../assets/images/burgers/whopper-cheeseburger.png";
const CheckoutExtraItem = () => {
    return (
        <div className={classes.CheckoutExtraItem}>
            <div>
                <img src={burger} alt="Extra Item" />
            </div>
            <div className={classes.CheckoutExtraItemInfo}>
                <span>HERSHEY'S Sundae Pie</span>
                <div>
                    <span>
                        $2.39<span>|</span>
                    </span>
                    <span>305 Cal</span>
                </div>
            </div>
            <div>+</div>
        </div>
    );
};

export default CheckoutExtraItem;
