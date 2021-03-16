import React, { Fragment, useState } from "react";
import classes from "./Checkout.module.css";
import CheckoutCartItem from "../../components/Checkout/CheckoutCartItem/CheckoutCartItem";
import Button from "../../components/UI/Button/Button";
import CheckoutExtraItem from "../../components/Checkout/CheckoutExtraItem/CheckoutExtraItem";
import CheckoutRadioOption from "../../components/Checkout/CheckoutRadioOption/CheckoutRadioOption";
const Checkout = () => {
    const [radioOptions, setRadioOptions] = useState([
        {
            header: "Drive Thru",
            description: "Drive up and let us know you placed an online order.",
            checked: true,
        },
        {
            header: "Pick Up",
            description:
                "We'll have your order ready at the counter when you arrive.",
            checked: false,
        },
    ]);
    const radioChangeHandler = (header) => {
        const newRadioOptions = radioOptions.map((option) => {
            if (option.header === header) {
                return { ...option, checked: true };
            }
            return { ...option, checked: false };
        });

        setRadioOptions(newRadioOptions);
    };

    const checkoutRadioOptions = radioOptions.map((option) => (
        <CheckoutRadioOption
            checked={option.checked}
            header={option.header}
            description={option.description}
            changed={radioChangeHandler}
            key={option.header}
        />
    ));

    const selectedRadioOption = radioOptions.find((el) => el.checked === true);

    return (
        <Fragment>
            <div className={classes.CheckoutHeader}>
                <div>X</div>
                <h1>{selectedRadioOption?.header} order</h1>
            </div>
            <div className={classes.Checkout}>
                <div className={classes.CheckoutAddress}>
                    <div>
                        <h2>Restourant Details</h2>
                        <span>Change Address</span>
                    </div>
                    <div className={classes.CheckoutAddressBox}>
                        <div className={classes.CheckoutAddressBoxDetails}>
                            <span>6085 Samuell Road</span>
                            <br />
                            <p>Garland, TX 75012</p>
                        </div>
                        <div className={classes.CheckoutAddressBoxOptions}>
                            {checkoutRadioOptions}
                        </div>
                    </div>
                </div>
                <div className={classes.CheckoutExtraItems}>
                    <h2>Add to order</h2>
                    <div>
                        <CheckoutExtraItem />
                        <CheckoutExtraItem />
                    </div>
                </div>

                <div className={classes.CheckoutCart}>
                    <h2>Your Cart</h2>
                    <ul>
                        <CheckoutCartItem />
                        <CheckoutCartItem />
                    </ul>
                    <Button btnType="Secondary">Add items</Button>
                    <div className={classes.CheckoutCartTotals}>
                        <div>
                            <span>Subtotal </span>
                            <span>$28.54</span>
                        </div>
                        <div>
                            <span>Tax</span>
                            <span>$2.24</span>
                        </div>
                        <hr />
                        <div>
                            <span>Total*</span>
                            <span>$30.83</span>
                        </div>
                    </div>
                </div>
                <div className={classes.CheckoutOrderButton}>
                    {/* order button */}
                    <Button btnType="Order">Continue</Button>
                </div>
            </div>
        </Fragment>
    );
};

export default Checkout;
