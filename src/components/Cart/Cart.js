import React, { useRef } from "react";
import classes from "./Cart.module.css";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import useClickOutsideAlerter from "../../hooks/useClickOutsideAlerter";

import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/cart";

const Cart = (props) => {
    const wrapperRef = useRef(null);
    const { clickedOutside } = props;

    useClickOutsideAlerter(wrapperRef, clickedOutside);

    const handleRemoveItem = (itemId) => {
        props.onRemoveItem(itemId);
    };

    const cartItems = props.cart.map((item) => {
        return (
            <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                size={item.size}
                removeClicked={handleRemoveItem}
                price={item.price}
            />
        );
    });

    return props.visibility ? (
        <div ref={wrapperRef} className={classes.Cart}>
            <div className={classes.CartItems}>{cartItems}</div>
            <div className={classes.CartButtonContainer}>
                <div className={classes.CartTotal}>
                    <b>Total*</b>
                    <span>${props.itemsPrice.toFixed(2)}</span>
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
        itemsPrice: state.cart.price,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveItem: (itemId) => dispatch(removeFromCart(itemId)),
    };
};

// onAddToCart: (cartItem) => dispatch(addToCart(cartItem)),

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
