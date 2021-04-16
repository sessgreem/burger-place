import React from "react";
import classes from "./Hero.module.css";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

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
                        <Link to="/menu">
                            <Button btnType="Hero">Order Pickup</Button>
                        </Link>
                        <Link to="/menu">
                            <Button btnType="Hero">Order Delivery</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default hero;
