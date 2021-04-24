import React, { Fragment } from "react";
import CustomizationOption from "./CustomizationOption/CustomizationOption";

const CustomizationOptions = (props) => {
    // Conditional rendering if props are given
    const sizes = props.sizes ? (
        <CustomizationOption
            heading="Combo Size"
            required
            options={props.sizes}
        />
    ) : null;

    const sides = props.sides ? (
        <CustomizationOption
            heading="Combo Sides"
            required={false}
            options={props.sides}
        />
    ) : null;

    const drinks = props.drinks ? (
        <CustomizationOption
            heading="Combo Drinks"
            required={false}
            options={props.drinks}
        />
    ) : null;

    const quantity = props.quantity ? (
        <CustomizationOption
            heading="Select Quantity"
            required={false}
            options={props.quantity}
        />
    ) : null;

    return (
        <Fragment>
            {sizes}
            {sides}
            {drinks}
            {quantity}
        </Fragment>
    );
};

export default CustomizationOptions;
