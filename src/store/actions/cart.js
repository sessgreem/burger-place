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
