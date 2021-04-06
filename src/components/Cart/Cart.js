import React, { useRef } from "react";
import classes from "./Cart.module.css";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import useClickOutside from "../../hooks/useClickOutside";
import { useHistory } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Cart = (props) => {
    const [cartItems, itemsPrice, handlers] = useCart();
    const wrapperRef = useRef(null);
    const { clickedOutside } = props;
    let history = useHistory();

    useClickOutside(wrapperRef, clickedOutside);

    const items = cartItems.map((item) => {
        return (
            <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                size={item.size}
                quantity={item.quantity}
                price={item.price * item.quantity}
                removeClicked={handlers.handleRemoveItem}
                incrementClicked={handlers.handleIncrement}
                decrementClicked={handlers.handleDecrement}
            />
        );
    });
    const checkoutButtonHandler = () => {
        history.push("/checkout");
    };
    return props.visibility ? (
        <div ref={wrapperRef} className={classes.Cart}>
            <div className={classes.CartItems}>{items}</div>
            <div className={classes.CartButtonContainer}>
                <div className={classes.CartTotal}>
                    <b>Total*</b>
                    <span>${itemsPrice.toFixed(2)}</span>
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

export default Cart;
