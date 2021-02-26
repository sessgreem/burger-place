import React from "react";
import Button from "../UI/Button/Button";

import classes from "./Actions.module.css";

const actions = (props) => {
    return (
        <div className={classes.Actions}>
            <Button btnType="Primary" clicked={props.signUpClicked}>
                Sign Up
            </Button>
            <Button btnType="Secondary" clicked={props.cartClicked}>
                0.00$
            </Button>
        </div>
    );
};

export default actions;
