import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { nanoid } from "nanoid";

const initialState = {
    items: [],
    price: 0,
};

const incrementItemQuantity = (state, action) => {
    if (action.quantity + 1 > 9) {
        return state;
    }
    let newPrice = 0;
    const updatedArray = state.items.map((item) => {
        if (item.id === action.itemId) {
            const newQuantity = action.quantity + 1;
            newPrice += item.price * newQuantity;
            return { ...item, quantity: newQuantity };
        }
        newPrice += item.price * item.quantity;
        return item;
    });
    return updateObject(state, { items: updatedArray, price: newPrice });
};
const decrementItemQuantity = (state, action) => {
    if (action.quantity - 1 < 1) {
        return state;
    }
    let newPrice = 0;
    const updatedArray = state.items.map((item) => {
        if (item.id === action.itemId) {
            const newQuantity = action.quantity - 1;
            newPrice += item.price * newQuantity;
            return { ...item, quantity: newQuantity };
        }
        newPrice += item.price * item.quantity;
        return item;
    });
    return updateObject(state, { items: updatedArray, price: newPrice });
};

const addToCart = (state, action) => {
    if (action.item.quantity < 1 && action.item.quantity > 8) {
        return state;
    }
    const updatedArray = state.items.concat({ ...action.item, id: nanoid() });
    const newPrice = state.price + action.item.price * action.item.quantity;
    return updateObject(state, { items: updatedArray, price: newPrice });
};

const removeFromCart = (state, action) => {
    const updatedArray = state.items.filter(
        (element) => element.id !== action.itemId
    );
    let newPrice = 0;
    updatedArray.forEach((el) => (newPrice += el.price * el.quantity));

    return updateObject(state, { items: updatedArray, price: newPrice });
};

const reducer = (state = initialState, action) => {
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

export default reducer;
