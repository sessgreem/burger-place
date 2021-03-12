import React, { Fragment, useState } from "react";
import SmallSlider from "../../components/SmallSlider/SmallSlider";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import classes from "./Customization.module.css";
import hero from "../../assets/images/hero.webp";
import CustomizationOption from "../../components/UI/CustomizationOption/CustomizationOption";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import { useParams } from "react-router";

const Customization = (props) => {
    const { sectionName, itemName } = useParams();
    const [state, setState] = useState({
        itemName,
        selectedSize: "Medium",
        selectedDrink: "Cola",
    });

    const item = props.menu[sectionName].sectionItems.find(
        (el) => el.itemName === itemName
    );
    const itemDescription = item.itemDescription;

    const changedSizeHandler = (selectedSize) => {
        const newState = {
            ...state,
            selectedSize,
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
                selected={state.selectedSize}
                changedSize={changedSizeHandler}
            />
        );
    });

    return (
        <Fragment>
            <Toolbar />
            <SmallSlider />
            <main>
                <div className={classes.CustomizationBackground}>
                    <div className={classes.CustomizationHero}>
                        <img src={hero} alt="Hero Item"></img>
                    </div>
                </div>
                <div className={classes.Customization}>
                    <div className={classes.CustomizationHeading}>
                        <h3>{itemName}</h3>
                        <p>
                            {itemDescription}
                            {/* ? these 2 have to be removed */}
                            <br /> *Weight based on pre-cooked patty
                            <br />
                            Medium Drink and Medium Side Included
                        </p>
                    </div>
                    <div className={classes.CustomizationOptionsContainer}>
                        <div>
                            <h4>Combo Size</h4>
                        </div>
                        {customizationOptions}
                    </div>
                    <div className={classes.CustomizationOrderButton}>
                        <span>Nutritional Information</span>
                        <Button btnType="Order">Check Availability</Button>
                    </div>
                    <div className={classes.CustomizationNutritionInfomartion}>
                        <p>Item availability varies by location.</p>
                        <p>
                            Calories will vary based on modifications made to
                            item. Product availability, prices, offers and
                            discounts may vary from in-restaurant. BK printed
                            coupons not valid on online orders.
                        </p>
                        <p>
                            2,000 calories a day is used for general nutrition
                            advice, but calorie needs vary. For additional
                            nutrition information click here.
                        </p>
                        <p>
                            Warning: indicates that sodium (salt) content of
                            this item is higher than the total daily recommended
                            limit (2,300mg). High Sodium intake can increase
                            blood pressure and risk of heart disease and stroke.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        menu: state,
    };
};

export default connect(mapStateToProps)(Customization);
