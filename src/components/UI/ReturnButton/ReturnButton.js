import React from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import classes from "./ReturnButton.module.css";
const ReturnButton = () => {
    let history = useHistory();
    const handleClicked = () => {
        history.goBack();
    };
    return (
        <div className={classes.ReturnButton}>
            <Button btnType="Secondary" clicked={handleClicked}>
                Go Back
            </Button>
        </div>
    );
};

export default ReturnButton;
