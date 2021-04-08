import React from "react";
import classes from "./CheckoutExtraItems.module.css";
import CheckoutExtraItem from "./CheckoutExtraItem/CheckoutExtraItem";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../store/actions/cart";

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

    const sweetsMenu = menu?.Sweets?.sectionItems;
    const sweetsArray = createArrayWithObjectsFromMenu(sweetsMenu);

    const sidesMenu = menu?.Sides?.sectionItems;
    const sidesArray = createArrayWithObjectsFromMenu(sidesMenu);

    const joinedItems = sweetsArray.concat(sidesArray);
    const randomItems =
        joinedItems.length > 1 ? getRandom(joinedItems, 2) : joinedItems[0];

    const addToCartHandler = (item) => {
        const _item = {
            ...item,
            hasDescription: false,
            quantity: 1,
        };
        dispatch(addToCart(_item));
    };

    const extraItems = randomItems.map((item, index) => {
        return (
            <CheckoutExtraItem
                key={index}
                name={item.name}
                calories={item.calories}
                price={item.price}
                imgURL={item.imgURL}
                addToCartClicked={addToCartHandler}
            />
        );
    });
    return (
        <div className={classes.CheckoutExtraItems}>
            <h2>Add to order</h2>
            <div>{extraItems}</div>
        </div>
    );
};

export default CheckoutExtraItems;
