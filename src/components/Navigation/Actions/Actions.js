import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./Actions.module.css";
import { connect } from "react-redux";
const Actions = (props) => {
    return (
        <div className={classes.Actions}>
            <Button btnType="Primary" clicked={props.signUpClicked}>
                Sign Up
            </Button>
            <Button btnType="Secondary" clicked={props.cartClicked}>
                ${props.itemsPrice.toFixed(2)}
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        itemsPrice: state.cart.price,
    };
};

export default connect(mapStateToProps)(Actions);
