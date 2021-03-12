import classes from "./Cart.module.css";
import React from "react";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";
const Cart = () => {
    // map Cart items <CartItem/>
    return (
        <div className={classes.Cart}>
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
    );
};

export default Cart;
