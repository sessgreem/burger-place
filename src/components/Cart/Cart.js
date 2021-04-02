import React, { useRef } from "react";
import classes from "./Cart.module.css";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import useClickOutside from "../../hooks/useClickOutside";

import { connect } from "react-redux";
import {
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
} from "../../store/actions/cart";
import { useHistory } from "react-router-dom";

const Cart = (props) => {
    const wrapperRef = useRef(null);
    const { clickedOutside } = props;
    let history = useHistory();

    useClickOutside(wrapperRef, clickedOutside);

    const handleRemoveItem = (itemId) => {
        props.onRemoveItem(itemId);
    };
    const handleIncrement = (itemId, quantity) => {
        props.onIncrement(itemId, quantity);
    };
    const handleDecrement = (itemId, quantity) => {
        props.onDecrement(itemId, quantity);
    };
    const cartItems = props.cart.map((item) => {
        return (
            <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                size={item.size}
                removeClicked={handleRemoveItem}
                price={item.price * item.quantity}
                incrementClicked={handleIncrement}
                decrementClicked={handleDecrement}
                quantity={item.quantity}
            />
        );
    });
    const checkoutButtonHandler = () => {
        history.push("/checkout");
    };
    return props.visibility ? (
        <div ref={wrapperRef} className={classes.Cart}>
            <div className={classes.CartItems}>{cartItems}</div>
            <div className={classes.CartButtonContainer}>
                <div className={classes.CartTotal}>
                    <b>Total*</b>
                    <span>${props.itemsPrice.toFixed(2)}</span>
                </div>
                <div className={classes.CartButton}>
                    <Button btnType="Cart" clicked={checkoutButtonHandler}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    ) : null;
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart.items,
        itemsPrice: state.cart.price,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveItem: (itemId) => dispatch(removeFromCart(itemId)),
        onIncrement: (itemId, quantity) =>
            dispatch(incrementItemQuantity(itemId, quantity)),
        onDecrement: (itemId, quantity) =>
            dispatch(decrementItemQuantity(itemId, quantity)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
