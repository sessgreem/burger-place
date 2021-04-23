import React from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import classes from "./ReturnButton.module.css";

const ReturnButton = () => {
    const history = useHistory();

    const handleClicked = () => {
        history.push("/menu");
    };
    return (
        <div className={classes.ReturnButton}>
            <Button btnType="Secondary" clicked={handleClicked}>
                Go to Menu
            </Button>
        </div>
    );
};

export default ReturnButton;
