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
import QuantityOption from "../../components/UI/QuantityOption/QuantityOption";

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
        quantity: 1,
    });
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

    let drinks = null;
    if (item.itemHasDrinks) {
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

    // Create and handle QuantityOption
    const [calculatedPrice, setCalculatedPrice] = useState(state.price);

    const handleIncrement = () => {
        if (state.quantity + 1 < 10) {
            const newQuantity = state.quantity + 1;

            const newPrice = newQuantity * state.price;
            setCalculatedPrice(newPrice);

            setState({
                ...state,
                quantity: newQuantity,
            });
        }
    };

    const handleDecrement = () => {
        if (state.quantity - 1 >= 1) {
            const newQuantity = state.quantity - 1;
            const newPrice = newQuantity * state.price;
            setCalculatedPrice(newPrice);

            setState({
                ...state,
                quantity: newQuantity,
            });
        }
    };
    const quantityOption = item?.itemQuantityOption ? (
        <QuantityOption
            incrementClicked={handleIncrement}
            decrementClicked={handleDecrement}
            price={calculatedPrice}
            quantity={state.quantity}
        />
    ) : null;

    return (
        <Fragment>
            <Toolbar />
            <SmallSlider />
            <main>
                <ReturnButton />
                <CustomizationBackground
                    imgURL={item.itemImgURL}
                    imgAlt={itemName}
                />
                <div className={classes.Customization}>
                    <CustomizationHeading
                        name={itemName}
                        description={item.itemDescription}
                        selectedSize={state.size}
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
