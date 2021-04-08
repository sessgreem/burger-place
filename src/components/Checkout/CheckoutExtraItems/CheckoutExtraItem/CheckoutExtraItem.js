import React from "react";
import classes from "./CheckoutExtraItem.module.css";
// import burger from "../../../../assets/images/burgers/whopper-cheeseburger.png";
import useProgressiveImage from "../../../../hooks/useProgressiveImage";
import useStorageUrlDownload from "../../../../hooks/useStorageUrlDownload";

const CheckoutExtraItem = ({
    name,
    calories,
    price,
    imgURL,
    addToCartClicked,
}) => {
    const item = { name, calories, price, imgURL };
    const imageURL = useStorageUrlDownload(imgURL);
    const imageElement = useProgressiveImage(imageURL, name);
    return (
        <div className={classes.CheckoutExtraItem}>
            <div>{imageElement}</div>
            <div className={classes.CheckoutExtraItemInfo}>
                <span>{name}</span>
                <div>
                    <span>
                        ${price.toFixed(2)}
                        <span>|</span>
                    </span>
                    <span>{calories} Cal</span>
                </div>
            </div>
            <div onClick={() => addToCartClicked(item)}>+</div>
        </div>
    );
};

export default CheckoutExtraItem;
