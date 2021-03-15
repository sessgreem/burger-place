import React from "react";
import classes from "./Checkout.module.css";
const Checkout = () => {
    return (
        <div className={classes.Checkout}>
            <div className={classes.CheckoutAddress}>
                <div>
                    <h2>Restourant Details</h2>
                    <span>Change Address</span>
                </div>
                <div className={classes.CheckoutAddressBox}>
                    <div className={classes.CheckoutAddressBoxDetails}>
                        <span>3215 Broadway Blvd</span>
                        <span>Garland, TX 75012</span>
                    </div>
                    <div className={classes.CheckoutAddressBoxOptions}>
                        {/* checkbox */}
                        {/* checkbox */}
                    </div>
                </div>
            </div>
            <div className={classes.CheckoutExtraItems}>
                {/* extra item */}
                {/* extra item */}
            </div>
            <div className={classes.CheckoutOrderButton}>
                {/* order button */}
            </div>
            <div className={classes.CheckoutCart}>
                <ul>{/* checkout cart items */}</ul>
                {/* button to add more items */}
                <div className={classes.CheckoutCartTotals}>
                    <div>
                        <span>Subtotal </span>
                        <span>$28.54</span>
                    </div>
                    <div>
                        <span>Tax</span>
                        <span>$2.24</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>$30.83</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
