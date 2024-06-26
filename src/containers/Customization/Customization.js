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
import { Redirect, useParams } from "react-router";
import { formatFromURL, formatFromURLItems } from "../../shared/formatURL";
import QuantityOption from "../../components/UI/QuantityOption/QuantityOption";
import { useHistory } from "react-router-dom";
import { formatToURL } from "../../shared/formatURL";
import useScrollToTop from "../../hooks/useScrollToTop";

const A_LA_CARTE = "A La Carte";
const MAX_QUANTITY = 10;
const MIN_QUANTITY = 1;

const Customization = (props) => {
    const history = useHistory();

    let { itemName, sectionName } = useParams();
    sectionName = formatFromURL(sectionName);
    itemName = formatFromURLItems(itemName);

    const item = props.menu[sectionName].sectionItems[itemName];

    const itemSizes = item?.itemSizes;
    const itemPrice = itemSizes
        ? itemSizes[item.itemDefaultSizeName]?.optionPrice
        : item?.itemPrice;

    const [itemState, setItemState] = useState({
        name: itemName,
        size: item?.itemDefaultSizeName,
        side: item?.itemDefaultSideName,
        drink: item?.itemDefaultDrinkName,
        price: itemPrice,
        quantity: 1,
        isExtra: item?.isExtra,
        hasDescription: item?.isExtra ? false : true,
    });

    const [calculatedPrice, setCalculatedPrice] = useState(itemState.price);

    useScrollToTop();

    if (!item) {
        return <Redirect to={"/"}></Redirect>;
    }

    let sizes = null;
    if (itemSizes) {
        const changedSizeHandler = (size) => {
            const newPrice = itemSizes[size].optionPrice;
            const newState = {
                ...itemState,
                size,
                price: newPrice,
            };
            setItemState(newState);
            setCalculatedPrice(newPrice);
        };

        sizes = Object.keys(itemSizes).map((optionName) => {
            return (
                <Option
                    key={optionName}
                    name={optionName}
                    description={itemSizes[optionName].optionDescription}
                    calories={itemSizes[optionName].optionCalories}
                    selected={itemState.size}
                    changedSize={changedSizeHandler}
                />
            );
        });
    }

    let sides = null;
    const itemSides = item?.itemSides;
    if (itemSides && itemState.size !== A_LA_CARTE) {
        // Should not check against a specific string that might be returned from the server
        const changeSideHandler = (sideName) => {
            const newState = {
                ...itemState,
                side: sideName,
            };
            setItemState(newState);
        };

        sides = Object.keys(itemSides).map((sideName) => {
            return (
                <CustomizationFaceOption
                    key={sideName}
                    name={sideName}
                    calories={itemSides[sideName].optionCalories}
                    selected={itemState.side}
                    size={itemState.size}
                    changedSide={changeSideHandler}
                    imgURL={itemSides[sideName].optionImgURL}
                    alt={itemSides[sideName].optionAlt}
                />
            );
        });
    }

    let drinks = null;
    if (item?.itemHasDrinks && itemState.size !== A_LA_CARTE) {
        // Should not check against a specific string that might be returned from the server
        const changeDrinkHandler = (drinkName) => {
            const newState = {
                ...itemState,
                drink: drinkName,
            };
            setItemState(newState);
        };
        const menuDrinks = props.menu.Drinks;
        drinks = Object.keys(menuDrinks).map((drinkName) => {
            return (
                <CustomizationFaceOption
                    key={drinkName}
                    name={drinkName}
                    calories={menuDrinks[drinkName].optionCalories}
                    selected={itemState.drink}
                    size={itemState.size}
                    changedSide={changeDrinkHandler}
                    imgURL={menuDrinks[drinkName].optionImgURL}
                    alt={menuDrinks[drinkName].optionAlt}
                />
            );
        });
    }

    const handleOrderClicked = () => {
        props.onAddToCart(itemState);

        history.replace({
            pathname: `/sections/${formatToURL(sectionName)}`,
            state: { toOpenCart: true },
        });
    };

    // Create and handle QuantityOption
    const handleIncrement = () => {
        if (itemState.quantity + 1 < MAX_QUANTITY) {
            const newQuantity = itemState.quantity + 1;

            const newPrice = newQuantity * itemState.price;
            setCalculatedPrice(newPrice);

            setItemState({
                ...itemState,
                quantity: newQuantity,
            });
        }
    };

    const handleDecrement = () => {
        if (itemState.quantity - 1 >= MIN_QUANTITY) {
            const newQuantity = itemState.quantity - 1;
            const newPrice = newQuantity * itemState.price;
            setCalculatedPrice(newPrice);

            setItemState({
                ...itemState,
                quantity: newQuantity,
            });
        }
    };

    const quantityOption = item?.itemQuantityOption ? (
        <QuantityOption
            incrementClicked={handleIncrement}
            decrementClicked={handleDecrement}
            price={calculatedPrice}
            quantity={itemState.quantity}
        />
    ) : null;

    //? Lack of type support, hard to understand what properties exist (sectionType?)
    // this type is for the blurred image type passed in as a property - ./src/hooks/useProgressiveImage.js
    const sectionType = props.menu[sectionName].sectionType
        ? props.menu[sectionName].sectionType
        : null;

    return (
        <Fragment>
            <Toolbar />
            <SmallSlider />
            <main>
                <ReturnButton />
                <CustomizationBackground
                    imgURL={item?.itemImgURL}
                    imgAlt={itemName}
                    blurredType={sectionType}
                />
                <div className={classes.Customization}>
                    <CustomizationHeading
                        name={itemName}
                        description={item?.itemDescription}
                        selectedSize={itemState.size}
                        price={calculatedPrice}
                    />
                    <CustomizationOptions
                        sizes={sizes}
                        sides={sides}
                        drinks={drinks}
                        quantity={quantityOption}
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
