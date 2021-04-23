import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
} from "../store/actions/cart";
const useCart = () => {
    const cart = useSelector((state) => state.cart.items);

    const itemsPrice = useSelector((state) => state.cart.itemsPrice);

    const dispatch = useDispatch();

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };
    const handleIncrement = (id, quantity) => {
        dispatch(incrementItemQuantity(id, quantity));
    };
    const handleDecrement = (id, quantity) => {
        dispatch(decrementItemQuantity(id, quantity));
    };

    return [
        cart,
        itemsPrice,
        { handleRemoveItem, handleIncrement, handleDecrement },
    ];
};
export default useCart;
