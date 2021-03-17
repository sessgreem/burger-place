import { updateObject } from "../utility";

const initialState = {
    items: [],
};

const addToCart = (state, action) => {
    const updatedArray = state.items.concat(action.item);
    return updateObject(state, { items: updatedArray });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return addToCart(state, action);
        case "REMOVE_FROM_CART":
            // return removeFromCart(state, action);
            return;
        default:
            return state;
    }
};

export default reducer;
