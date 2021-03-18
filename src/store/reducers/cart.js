import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import { nanoid } from "nanoid";
const initialState = {
    items: [],
    price: 0,
};

const addToCart = (state, action) => {
    const updatedArray = state.items.concat({ ...action.item, id: nanoid() });
    const newPrice = state.price + action.item.price;
    return updateObject(state, { items: updatedArray, price: newPrice });
};

const removeFromCart = (state, action) => {
    const updatedArray = state.items.filter(
        (element) => element.id !== action.itemId
    );
    let newPrice = 0;
    updatedArray.forEach((el) => (newPrice += el.price));

    return updateObject(state, { items: updatedArray, price: newPrice });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        default:
            return state;
    }
};

export default reducer;
