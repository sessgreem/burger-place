import * as actionTypes from "./actionTypes";

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        item,
    };
};

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        itemId,
    };
};

export const incrementItemQuantity = (itemId, quantity) => {
    return {
        type: actionTypes.INCREMENT_ITEM_QUANTITY,
        itemId,
        quantity,
    };
};

export const decrementItemQuantity = (itemId, quantity) => {
    return {
        type: actionTypes.DECREMENT_ITEM_QUANTITY,
        itemId,
        quantity,
    };
};
