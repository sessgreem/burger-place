import React from "react";
import classes from "./CheckoutExtraItem.module.css";
import useProgressiveImage from "../../../../hooks/useProgressiveImage";
import useStorageUrlDownload from "../../../../hooks/useStorageUrlDownload";
import Delayed from "../../../../shared/Delayed";
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
        <div
            onClick={() => addToCartClicked(item)}
            className={classes.CheckoutExtraItem}
        >
            <Delayed waitBeforeShow={1000}>
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
                <div>+</div>
            </Delayed>
        </div>
    );
};

export default CheckoutExtraItem;
