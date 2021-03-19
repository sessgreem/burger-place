import React from "react";
import classes from "./CustomizationFaceOption.module.css";
import ClassicFries from "../../../assets/images/faceoptions/classic_fries.webp";
import OnionRings from "../../../assets/images/faceoptions/onion_rings.webp";

const CustomizationFaceOption = (props) => {
    const optionClasses = [classes.CustomizationFaceOptionImage];

    const isSelected = props.selected === props.name;
    if (isSelected) {
        optionClasses.push(classes.Selected);
    }

    let img;
    switch (props.name) {
        case "Classic Fries":
            img = <img src={ClassicFries} alt="Classic Fries" />;
            break;
        case "Onion Rings":
            img = <img src={OnionRings} alt="Onion Rings" />;
            break;
        default:
            img = null;
            break;
    }

    return (
        <div
            className={classes.CustomizationFaceOption}
            onClick={() => props.changedSide(props.name)}
        >
            <div className={optionClasses.join(" ")}>{img}</div>
            <div className={classes.CustomizationFaceOptionDescription}>
                <h4>
                    {props.size} {props.name}
                </h4>
                <h5>{props.calories} Cal</h5>
            </div>
        </div>
    );
};

export default CustomizationFaceOption;
