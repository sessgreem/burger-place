import React, { Fragment } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./Home.module.css";
import Button from "../../components/UI/Button/Button";

const home = (props) => {
    return (
        <Fragment>
            <Toolbar />
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
        </Fragment>
    );
};

export default home;
