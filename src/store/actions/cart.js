import * as actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export const addToCart = (item) => {
    toast.success(`${item.name} Meal ${item.size} added to your cart.`);
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
