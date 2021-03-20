import React from "react";
import classes from "./CheckoutHeader.module.css";
import { Link } from "react-router-dom";
const CheckoutHeader = (props) => {
    return (
        <div className={classes.CheckoutHeader}>
            <Link to={"/"}>X</Link>
            <h1>{props.header} order</h1>
        </div>
    );
};

export default CheckoutHeader;
