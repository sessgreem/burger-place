import React from "react";
import Incrementor from "../../UI/Incrementor/Incrementor";
import classes from "./QuantityOption.module.css";

const QuantityOption = (props) => {
    return (
        <div className={classes.QuantityOption}>
            <div>
                <span className={classes.QuantityOptionPrice}>
                    ${props.price}
                </span>
            </div>
            <Incrementor
                incrementClicked={props.incrementClicked}
                decrementClicked={props.decrementClicked}
                number={props.quantity}
            />
        </div>
    );
};

export default QuantityOption;
