import * as actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export const addToCart = (item) => {
    let extra = null;
    if (item.isExtra) extra = { autoClose: 2000 };
    toast.success(`${item.name} added to your cart.`, extra);

    return {
        type: actionTypes.ADD_TO_CART,
        item,
    };
};

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id,
    };
};

export const incrementItemQuantity = (id, quantity) => {
    return {
        type: actionTypes.INCREMENT_ITEM_QUANTITY,
        id,
        quantity,
    };
};

export const decrementItemQuantity = (id, quantity) => {
    return {
        type: actionTypes.DECREMENT_ITEM_QUANTITY,
        id,
        quantity,
    };
};
