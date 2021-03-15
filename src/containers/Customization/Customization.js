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
                <CustomizationBackground />
                <div className={classes.Customization}>
                    <CustomizationHeading
                        name={itemName}
                        description={itemDescription}
                    />
                    <CustomizationOptions options={customizationOptions} />
                    <CustomizationOrderButton />
                    <CustomizationNutritionInformation />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

const mapStateToProps = (menu) => {
    return {
        menu,
    };
};

export default connect(mapStateToProps)(Customization);
