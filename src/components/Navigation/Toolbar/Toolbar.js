import React from "react";

import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Actions from "../Actions/Actions";

import classes from "./Toolbar.module.css";

const Toolbar = () => {
    const signUpHandler = () => {
        console.log("signupclicked");
    };

    const cartHandler = () => {
        console.log("carthandler clicked");
    };

    return (
        <header className={classes.Toolbar}>
            <nav className={classes.DesktopOnly}>
                <div className={classes.NavItems}>
                    <NavItems />
                </div>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <div className={classes.Actions}>
                    <Actions
                        singUpClicked={signUpHandler}
                        cartClicked={cartHandler}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;
