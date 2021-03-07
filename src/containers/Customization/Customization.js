import React, { Fragment } from "react";
import SmallSlider from "../../components/SmallSlider/SmallSlider";
import Toolbar from "../../components/Toolbar/Toolbar";
import classes from "./Customization.module.css";
import burger from "../../assets/images/burgers/whopper";

const Customization = (props) => {
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
                <div className={classes.CustomizationContainer}>
                    {/* <CustomizationOption/> */}
                </div>
            </main>
        </Fragment>
    );
};

export default Customization;
