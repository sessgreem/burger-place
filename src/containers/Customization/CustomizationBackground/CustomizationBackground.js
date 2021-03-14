import React from "react";
import classes from "./CustomizationBackground.module.css";
import hero from "../../../assets/images/hero.webp";

const CustomizationBackground = () => {
    return (
        <div className={classes.CustomizationBackground}>
            <div className={classes.CustomizationHero}>
                <img src={hero} alt="Hero Item"></img>
            </div>
        </div>
    );
};

export default CustomizationBackground;
