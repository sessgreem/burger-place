import React, { Fragment } from "react";
import SmallSlider from "../../components/SmallSlider/SmallSlider";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Customization.module.css";
import burger from "../../assets/images/burgers/whopper-cheeseburger.png";
import CustomizationOption from "../../components/UI/CustomizationOption/CustomizationOption";
import Button from "../../components/UI/Button/Button";
import { connect } from "react-redux";
import { useParams } from "react-router";

const Customization = (props) => {
    const { sectionName, itemName } = useParams();

    const item = props.menu[sectionName].sectionItems.find(
        (el) => el.itemName === itemName
    );

    const customizationOptions = item.itemOptions.map((option) => {
        return (
            <CustomizationOption
                name={option.optionName}
                description={option.optionDescription}
                calories={option.optionCalories}
            />
        );
    });
    return (
        <Fragment>
            <Toolbar />
            <SmallSlider />
            <main className={classes.Customization}>
                <div className={classes.CustomizationBackground}>
                    <img src={burger} alt=""></img>
                </div>
                <div className={classes.CustomizationHeading}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                <div className={classes.CustomizationOptionsContainer}>
                    <h4>Combo size</h4>
                    {customizationOptions}
                </div>
                <div className={classes.CustomizationOrderButton}>
                    <Button btnType="order">Add to order</Button>
                </div>
                <div className={classes.CustomizationNutritionInfomartion}>
                    <p>Item availability varies by location.</p>
                    <p>
                        Calories will vary based on modifications made to item.
                        Product availability, prices, offers and discounts may
                        vary from in-restaurant. BK printed coupons not valid on
                        online orders.
                    </p>
                    <p>
                        2,000 calories a day is used for general nutrition
                        advice, but calorie needs vary. For additional nutrition
                        information click here.
                    </p>
                    <p>
                        Warning: indicates that sodium (salt) content of this
                        item is higher than the total daily recommended limit
                        (2,300mg). High Sodium intake can increase blood
                        pressure and risk of heart disease and stroke.
                    </p>
                </div>
            </main>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        menu: state,
    };
};

export default connect(mapStateToProps)(Customization);
