import React, { useEffect, useRef } from "react";
import classes from "./Cart.module.css";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";

const useOutsideAlerter = (ref, clickedoutSide) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                clickedoutSide();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, clickedoutSide]);
};

const Cart = (props) => {
    const wrapperRef = useRef(null);
    const { clickedOutside } = props;
    useOutsideAlerter(wrapperRef, clickedOutside);

    // ? map Cart items <CartItem/>

    return props.visibility ? (
        <div ref={wrapperRef} className={classes.Cart}>
            <div className={classes.CartItems}>
                {/* {CartItems} */}
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
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

export default Cart;
