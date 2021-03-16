import React from "react";
import classes from "./CheckoutRadioOption.module.css";

const CheckoutRadioOption = (props) => {
    const attachedStyles = [classes.CheckoutRadioOptionIndicator];
    if (props.checked) {
        attachedStyles.push(classes.active);
    }

    return (
        <div
            className={classes.CheckoutRadioOption}
            onClick={() => props.changed(props.header)}
        >
            <input id="checkout-radio-option" type="radio" />
            <div className={attachedStyles.join(" ")}>
                <span></span>
            </div>
            <div className={classes.CheckoutRadioOptionDescription}>
                <h4>{props.header}</h4>
                <span>{props.description}</span>
            </div>
        </div>
    );
};

export default CheckoutRadioOption;
