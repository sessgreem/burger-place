import React, { Fragment, useState } from "react";
import classes from "./Checkout.module.css";
import CheckoutRadioOption from "../../components/Checkout/CheckoutRadioOption/CheckoutRadioOption";
import CartItem from "../../components/Cart/CartItem/CartItem";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/cart";
import CheckoutExtraItems from "../../components/Checkout/CheckoutExtraItems/CheckoutExtraItems";
import CheckoutCart from "../../components/Checkout/CheckoutCart/CheckoutCart";
import CheckoutOrderButton from "../../components/Checkout/CheckoutOrderButton/CheckoutOrderButton";
import CheckoutAddress from "../../components/Checkout/CheckoutAddress/CheckoutAddress";
import CheckoutHeader from "../../components/Checkout/CheckoutHeader/CheckoutHeader";
const Checkout = (props) => {
    const [radioOptions, setRadioOptions] = useState([
        {
            header: "Drive Thru",
            description: "Drive up and let us know you placed an online order.",
            checked: true,
        },
        {
            header: "Pick Up",
            description:
                "We'll have your order ready at the counter when you arrive.",
            checked: false,
        },
    ]);

    const radioChangeHandler = (header) => {
        const newRadioOptions = radioOptions.map((option) => {
            if (option.header === header) {
                return { ...option, checked: true };
            }
            return { ...option, checked: false };
        });

        setRadioOptions(newRadioOptions);
    };

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
    const handleRemoveItem = (itemId) => {
        props.onRemoveItem(itemId);
    };

    const checkoutCartItems = props.cart.map((item) => {
        return (
            <li key={item.id}>
                <CartItem
                    id={item.id}
                    name={item.name}
                    size={item.size}
                    side={item.side}
                    drink={item.drink}
                    removeClicked={handleRemoveItem}
                    hasDescription={true}
                    price={item.price}
                />
            </li>
        );
    });

    return (
        <Fragment>
            <CheckoutHeader header={selectedRadioOption.header} />
            <div className={classes.Checkout}>
                <CheckoutAddress options={checkoutRadioOptions} />
                <CheckoutExtraItems />
                <CheckoutCart
                    items={checkoutCartItems}
                    price={props.itemsPrice}
                />
                <CheckoutOrderButton />
            </div>
        </Fragment>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
