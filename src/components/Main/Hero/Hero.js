import React from "react";

import classes from "./Hero.module.css";
import Button from "../../UI/Button/Button";

const hero = () => {
    return (
        <div className={classes.HeroContainer}>
            <div className={classes.HeroContent}>
                <div className={classes.HeroHeading}>
                    <h1>
                        Hungry?
                        <br />
                        We got you
                    </h1>
                    <div className={classes.HeroActions}>
                        <Button btnType="Hero">Order Pickup</Button>
                        <Button btnType="Hero">Order Delivery</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default hero;
