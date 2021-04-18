import React, { Fragment } from "react";
import classes from "./Checkout.module.css";
import CheckoutRadioOption from "../../components/Checkout/CheckoutRadioOption/CheckoutRadioOption";
import CartItem from "../../components/Cart/CartItem/CartItem";
import CheckoutExtraItems from "../../components/Checkout/CheckoutExtraItems/CheckoutExtraItems";
import CheckoutCart from "../../components/Checkout/CheckoutCart/CheckoutCart";
import CheckoutOrderButton from "../../components/Checkout/CheckoutOrderButton/CheckoutOrderButton";
import CheckoutAddress from "../../components/Checkout/CheckoutAddress/CheckoutAddress";
import CheckoutHeader from "../../components/Checkout/CheckoutHeader/CheckoutHeader";
import useCart from "../../hooks/useCart";
import useRadioOptions from "../../hooks/useRadioOptions";
import { Helmet } from "react-helmet-async";

const Checkout = (props) => {
    const [radioOptions, radioChangeHandler] = useRadioOptions();

    const checkoutRadioOptions = radioOptions.map((option) => (
        <CheckoutRadioOption
            checked={option.checked}
            header={option.header}
            description={option.description}
            changed={radioChangeHandler}
            key={option.header}
        />
    ));

    const selectedRadioOption = radioOptions.find((el) => el.checked === true);

    // CartItem functionality
    const [cartItems, itemsPrice, handlers] = useCart();

    const checkoutCartItems = cartItems.map((item) => {
        return (
            <li key={item.id}>
                <CartItem
                    id={item.id}
                    name={item.name}
                    size={item.size}
                    side={item.side}
                    drink={item.drink}
                    hasDescription={item.hasDescription}
                    quantity={item.quantity}
                    price={item.price * item.quantity}
                    removeClicked={handlers.handleRemoveItem}
                    incrementClicked={handlers.handleIncrement}
                    decrementClicked={handlers.handleDecrement}
                />
            </li>
        );
    });

    return (
        <Fragment>
            <Helmet>
                <title>Burger Place - Checkout</title>
            </Helmet>
            <CheckoutHeader header={selectedRadioOption.header} />
            <div className={classes.Checkout}>
                <CheckoutAddress options={checkoutRadioOptions} />
                <CheckoutExtraItems />
                <CheckoutCart items={checkoutCartItems} price={itemsPrice} />
                <CheckoutOrderButton />
            </div>
        </Fragment>
    );
};

export default Checkout;
