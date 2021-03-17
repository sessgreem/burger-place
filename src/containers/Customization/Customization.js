import React, { Fragment, useState } from "react";
import classes from "./Customization.module.css";
import SmallSlider from "../../components/SmallSlider/SmallSlider";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";

import CustomizationNutritionInformation from "../../components/Customization/CustomizationNutritionInformation/CustomizationNutritionInformation";
import CustomizationOrderButton from "../../components/Customization/CustomizationOrderButton/CustomizationOrderButton";
import CustomizationOptions from "../../components/Customization/CustomizationOptions/CustomizationOptions";
import CustomizationHeading from "../../components/Customization/CustomizationHeading/CustomizationHeading";
import CustomizationBackground from "../../components/Customization/CustomizationBackground/CustomizationBackground";
import CustomizationOption from "../../components/UI/CustomizationOption/CustomizationOption";

import { addToCart } from "../../store/actions/cart";

import { connect } from "react-redux";
import { useParams } from "react-router";

const Customization = (props) => {
    const { sectionName, itemName } = useParams();

    const [state, setState] = useState({
        name: itemName,
        size: "Medium",
        drink: "Cola",
    });

    const item = props.menu[sectionName].sectionItems.find(
        (el) => el.itemName === itemName
    );

    const itemDescription = item.itemDescription;

    const changedSizeHandler = (size) => {
        const newState = {
            ...state,
            size,
        };
        setState(newState);
    };

    const customizationOptions = item.itemOptions.map((option) => {
        return (
            <CustomizationOption
                key={option.optionName}
                name={option.optionName}
                description={option.optionDescription}
                calories={option.optionCalories}
                selected={state.size}
                changedSize={changedSizeHandler}
            />
        );
    });

    const handleOrderClicked = () => {
        console.log("order clicked");
        props.onAddToCart(state);
    };

    return (
        <Fragment>
            <Toolbar />
            <SmallSlider />
            <main>
                <CustomizationBackground />
                <div className={classes.Customization}>
                    <CustomizationHeading
                        name={itemName}
                        description={itemDescription}
                    />
                    <CustomizationOptions options={customizationOptions} />
                    <CustomizationOrderButton
                        orderClicked={handleOrderClicked}
                    />
                    <CustomizationNutritionInformation />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
        cart: state.cart.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (cartItem) => dispatch(addToCart(cartItem)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customization);
