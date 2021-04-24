import React, { useState, useCallback, useEffect } from "react";
import classes from "./CheckoutExtraItems.module.css";
import CheckoutExtraItem from "./CheckoutExtraItem/CheckoutExtraItem";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../store/actions/cart";
import useCart from "../../../hooks/useCart";

function getRandom(arr, n) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
const createArrayWithObjectsFromMenu = (object) => {
    const array = [];
    Object.keys(object).forEach((element) => {
        const newObject = {
            name: element,
            calories: object[element]?.itemCalories,
            price: object[element]?.itemPrice,
            imgURL: object[element]?.itemImgURL,
        };

        array.push(newObject);
    });
    return array;
};

const CheckoutExtraItems = () => {
    const menu = useSelector((state) => state.menu);
    const dispatch = useDispatch();

    const [cartItems] = useCart();
    const extraItemsInCart = cartItems.filter((item) => item.isExtra);

    const [recommendedItems, setRecommendedItems] = useState(null);

    const getTwoRandomItems = useCallback((menu, itemsInCart) => {
        const sweetsMenu = menu?.Sweets?.sectionItems;
        const sweetsArray = createArrayWithObjectsFromMenu(sweetsMenu);

        const sidesMenu = menu?.Sides?.sectionItems;
        const sidesArray = createArrayWithObjectsFromMenu(sidesMenu);

        const joinedItems = sweetsArray.concat(sidesArray).filter((item) => {
            let found = 0;
            itemsInCart.forEach((itemInCart) => {
                if (itemInCart.name === item.name) {
                    found = 1;
                    return;
                }
            });
            return found ? null : item;
        });

        return joinedItems.length > 1
            ? getRandom(joinedItems, 2)
            : [sidesArray[1], sidesArray[2]];
    }, []);

    const addToCartHandler = useCallback(
        (item) => {
            const _item = {
                ...item,
                hasDescription: false,
                quantity: 1,
                isExtra: true,
            };
            dispatch(addToCart(_item));
        },
        [dispatch]
    );

    useEffect(() => {
        let itemComponents = recommendedItems;

        const removeFromRecommended = (item) => {
            const newRecommendedItems = itemComponents.filter(
                (component) => component.props.name !== item.name
            );
            itemComponents = newRecommendedItems;
            setRecommendedItems(newRecommendedItems);
        };

        if (itemComponents === null || !itemComponents.length) {
            const twoRandomItems = getTwoRandomItems(menu, extraItemsInCart);
            itemComponents = twoRandomItems.map((item, index) => {
                return (
                    <CheckoutExtraItem
                        key={index}
                        name={item.name}
                        calories={item.calories}
                        price={item.price}
                        imgURL={item.imgURL}
                        addToCartClicked={(item) => {
                            addToCartHandler(item);
                            removeFromRecommended(item);
                        }}
                    />
                );
            });
            setRecommendedItems(itemComponents);
        }
    }, [
        addToCartHandler,
        extraItemsInCart,
        getTwoRandomItems,
        menu,
        recommendedItems,
    ]);

    return (
        <div className={classes.CheckoutExtraItems}>
            <h2>Add to Order</h2>
            <div>{recommendedItems}</div>
        </div>
    );
};

export default CheckoutExtraItems;
