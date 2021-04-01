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
import Option from "../../components/UI/Option/Option";
import CustomizationFaceOption from "../../components/UI/CustomizationFaceOption/CustomizationFaceOption";
import ReturnButton from "../../components/UI/ReturnButton/ReturnButton";
import { addToCart } from "../../store/actions/cart";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { formatFromURL } from "../../shared/formatURL";

const Customization = (props) => {
    const { itemName } = useParams();
    let { sectionName } = useParams();
    sectionName = formatFromURL(sectionName);

    const item = props.menu[sectionName].sectionItems[itemName];

    const itemSizes = item?.itemSizes;

    let itemPrice = itemSizes
        ? itemSizes[item.itemDefaultSizeName].optionPrice
        : item?.itemPrice;

    const [state, setState] = useState({
        name: itemName,
        size: item?.itemDefaultSizeName,
        side: item?.itemDefaultSideName,
        drink: item?.itemDefaultDrinkName,
        price: itemPrice,
    });

    console.log(state);
    let sizes = null;
    if (itemSizes) {
        const changedSizeHandler = (size) => {
            const newPrice = itemSizes[size].optionPrice;
            const newState = {
                ...state,
                size,
                price: newPrice,
            };
            setState(newState);
        };

        sizes = Object.keys(itemSizes).map((optionName) => {
            return (
                <Option
                    key={optionName}
                    name={optionName}
                    description={itemSizes[optionName].optionDescription}
                    calories={itemSizes[optionName].optionCalories}
                    selected={state.size}
                    changedSize={changedSizeHandler}
                />
            );
        });
    }

    const itemSides = item.itemSides;
    let sides = null;
    if (itemSides) {
        const changeSideHandler = (sideName) => {
            const newState = {
                ...state,
                side: sideName,
            };
            setState(newState);
        };

        sides = Object.keys(itemSides).map((sideName) => {
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
    }

    const hasDrinks = item.itemHasDrinks;
    console.log(hasDrinks);
    let drinks = null;
    if (hasDrinks) {
        const changeDrinkHandler = (drinkName) => {
            const newState = {
                ...state,
                drink: drinkName,
            };
            setState(newState);
        };
        const menuDrinks = props.menu.Drinks;
        drinks = Object.keys(menuDrinks).map((drinkName) => {
            return (
                <CustomizationFaceOption
                    key={drinkName}
                    name={drinkName}
                    calories={menuDrinks[drinkName].optionCalories}
                    selected={state.drink}
                    size={state.size}
                    changedSide={changeDrinkHandler}
                    imgURL={menuDrinks[drinkName].optionImgURL}
                    alt={menuDrinks[drinkName].optionAlt}
                />
            );
        });
    }

    const handleOrderClicked = () => {
        props.onAddToCart(state);
    };

    const itemDescription = item.itemDescription;
    const itemImgURL = item.itemImgURL;
    return (
        <Fragment>
            <Toolbar />
            <SmallSlider />
            <main>
                <ReturnButton />
                <CustomizationBackground
                    imgURL={itemImgURL}
                    imgAlt={itemName}
                />

                <div className={classes.Customization}>
                    <CustomizationHeading
                        name={itemName}
                        description={itemDescription}
                        selectedSize={state.size}
                        price={state.price}
                    />
                    <CustomizationOptions
                        sizes={sizes}
                        sides={sides}
                        drinks={drinks}
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
