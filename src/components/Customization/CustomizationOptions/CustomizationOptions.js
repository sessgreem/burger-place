import React, { Fragment } from "react";
import CustomizationOption from "./CustomizationOption/CustomizationOption";

const CustomizationOptions = (props) => {
    //    sizes={customizationOptions}
    //    selectedSize={state.size}
    //    sides={sides}
    //    drinks={drinks}
    return (
        <Fragment>
            <CustomizationOption
                heading="Combo Size"
                required={true}
                options={props.sizes}
            />
            <CustomizationOption
                heading="Combo Sides"
                required={false}
                options={props.sides}
            />
            <CustomizationOption
                heading="Combo Drinks"
                required={false}
                options={props.drinks}
            />
        </Fragment>
    );
};

export default CustomizationOptions;
