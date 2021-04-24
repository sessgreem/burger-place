import React from "react";
import classes from "./CheckoutAddress.module.css";
const CheckoutAddress = (props) => {
    return (
        <div className={classes.CheckoutAddress}>
            <div>
                <h2>Restourant Details</h2>
            </div>
            <div className={classes.CheckoutAddressBox}>
                <div className={classes.CheckoutAddressBoxDetails}>
                    <span>6085 Samuell Road</span>
                    <br />
                    <p>Garland, TX 75012</p>
                </div>
                <div className={classes.CheckoutAddressBoxOptions}>
                    {props.options}
                </div>
            </div>
        </div>
    );
};

export default CheckoutAddress;
