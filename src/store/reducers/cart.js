import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { nanoid } from "nanoid";

const cart = {
    items: [],
    itemsPrice: 0,
};

const incrementItemQuantity = (state, action) => {
    if (action.quantity + 1 > 9) {
        return state;
    }

    let newPrice = 0;
    const updatedArray = state.items.map((item) => {
        if (item.id !== action.id) {
            newPrice += item.price * item.quantity;
            return item;
        }

        const newQuantity = action.quantity + 1;
        newPrice += item.price * newQuantity;

        return { ...item, quantity: newQuantity };
    });

    return updateObject(state, { items: updatedArray, itemsPrice: newPrice });
};

const decrementItemQuantity = (state, action) => {
    if (action.quantity - 1 < 1) {
        return state;
    }

    let newPrice = 0;
    const updatedArray = state.items.map((item) => {
        if (item.id !== action.id) {
            newPrice += item.price * item.quantity;
            return item;
        }
        const newQuantity = action.quantity - 1;
        newPrice += item.price * newQuantity;

        return { ...item, quantity: newQuantity };
    });

    return updateObject(state, { items: updatedArray, itemsPrice: newPrice });
};

const addToCart = (state, action) => {
    let quantity = action.item.quantity;

    if (isNaN(quantity) || !quantity) {
        quantity = 1;
    }

    if (quantity < 1 && quantity > 8) {
        return state;
    }

    const updatedArray = state.items.concat({ ...action.item, id: nanoid() });
    const newPrice = state.itemsPrice + action.item.price * quantity;

    return updateObject(state, { items: updatedArray, itemsPrice: newPrice });
};

const removeFromCart = (state, action) => {
    const updatedArray = state.items.filter(
        (element) => element.id !== action.id
    );

    let newPrice = 0;
    updatedArray.forEach((el) => (newPrice += el.price * el.quantity));

    return updateObject(state, { items: updatedArray, itemsPrice: newPrice });
};

const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        case actionTypes.INCREMENT_ITEM_QUANTITY:
            return incrementItemQuantity(state, action);
        case actionTypes.DECREMENT_ITEM_QUANTITY:
            return decrementItemQuantity(state, action);
        default:
            return state;
    }
};

export default cartReducer;
