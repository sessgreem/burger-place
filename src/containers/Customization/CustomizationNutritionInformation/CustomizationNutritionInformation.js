import React from "react";
import classes from "./CustomizationNutritionInformation.module.css";

const CustomizationNutritionInformation = () => {
    return (
        <div className={classes.CustomizationNutritionInfomartion}>
            <p>Item availability varies by location.</p>
            <p>
                Calories will vary based on modifications made to item. Product
                availability, prices, offers and discounts may vary from
                in-restaurant. BK printed coupons not valid on online orders.
            </p>
            <p>
                2,000 calories a day is used for general nutrition advice, but
                calorie needs vary. For additional nutrition information click
                here.
            </p>
            <p>
                Warning: indicates that sodium (salt) content of this item is
                higher than the total daily recommended limit (2,300mg). High
                Sodium intake can increase blood pressure and risk of heart
                disease and stroke.
            </p>
        </div>
    );
};

export default CustomizationNutritionInformation;
