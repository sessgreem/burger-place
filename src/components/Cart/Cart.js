import React, { useRef } from "react";
import classes from "./Cart.module.css";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import useClickOutsideAlerter from "../../hooks/useClickOutsideAlerter";

import { connect } from "react-redux";

const Cart = (props) => {
    const wrapperRef = useRef(null);
    const { clickedOutside } = props;

    useClickOutsideAlerter(wrapperRef, clickedOutside);

    const cartItems = props.cart.map((item, index) => {
        return <CartItem key={index} name={item.name} size={item.size} />;
    });

    return props.visibility ? (
        <div ref={wrapperRef} className={classes.Cart}>
            <div className={classes.CartItems}>{cartItems}</div>
            <div className={classes.CartButtonContainer}>
                <div className={classes.CartTotal}>
                    <b>Total*</b>
                    <span>$15.52</span>
                </div>
                <div className={classes.CartButton}>
                    <Button btnType="Cart">Checkout</Button>
                </div>
            </div>
        </div>
    ) : null;
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart.items,
    };
};

export default connect(mapStateToProps)(Cart);
