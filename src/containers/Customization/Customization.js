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
import CustomizationFaceOption from "../../components/UI/CustomizationFaceOption/CustomizationFaceOption";

import { addToCart } from "../../store/actions/cart";

import { connect } from "react-redux";
import { useParams } from "react-router";

const Customization = (props) => {
    const { sectionName, itemName } = useParams();

    const item = props.menu[sectionName].sectionItems[itemName];
    const itemOptions = item.itemOptions;
    const itemPrice = itemOptions[item.itemDefaultOptionName].optionPrice;

    const [state, setState] = useState({
        name: itemName,
        size: item.itemDefaultOptionName,
        side: item.itemDefaultSideName,
        drink: "Cola",
        price: itemPrice,
    });

    const changedSizeHandler = (size) => {
        const newPrice = itemOptions[size].optionPrice;
        const newState = {
            ...state,
            size,
            price: newPrice,
        };
        setState(newState);
    };

    const customizationOptions = Object.keys(itemOptions).map((optionName) => {
        return (
            <CustomizationOption
                key={optionName}
                name={optionName}
                description={itemOptions[optionName].optionDescription}
                calories={itemOptions[optionName].optionCalories}
                selected={state.size}
                changedSize={changedSizeHandler}
            />
        );
    });

    const changeSideHandler = (sideName) => {
        const newState = {
            ...state,
            side: sideName,
        };
        setState(newState);
    };

    const itemSides = item.itemSides;
    const customizationFaceOptions = Object.keys(itemSides).map((sideName) => {
        return (
            <CustomizationFaceOption
                key={sideName}
                name={sideName}
                calories={itemSides[sideName].optionCalories}
                selected={state.side}
                size={state.size}
                changedSide={changeSideHandler}
                imgURL={itemSides[sideName].optionImgURL}
                alt={itemSides[sideName].optionAlt}
            />
        );
    });

    const handleOrderClicked = () => {
        props.onAddToCart(state);
    };

    const itemDescription = item.itemDescription;

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
                        selectedSize={state.size}
                        price={state.price}
                    />
                    <CustomizationOptions
                        sizes={customizationOptions}
                        selectedSize={state.size}
                        sides={customizationFaceOptions}
                    />
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
