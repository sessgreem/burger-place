import React, { Fragment, useState, useEffect } from "react";

import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Actions from "../Actions/Actions";

import classes from "./Toolbar.module.css";
import Cart from "../../Cart/Cart";

const Toolbar = () => {
    const [cartVisibility, setCartVisibility] = useState(false);

    const signUpClickedHandler = () => {
        console.log("signupclicked");
    };

    const cartClickedHandler = () => {
        setCartVisibility(!cartVisibility);
    };

    let timeout;
    const cartClickedOutside = () => {
        timeout = setTimeout(() => setCartVisibility(false), 10);
    };
    useEffect(() => {
        return () => clearTimeout(timeout);
    });

    return (
        <Fragment>
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
                            singUpClicked={signUpClickedHandler}
                            cartClicked={cartClickedHandler}
                        />
                        <Cart
                            visibility={cartVisibility}
                            clickedOutside={cartClickedOutside}
                        />
                    </div>
                </nav>
            </header>
        </Fragment>
    );
};

export default Toolbar;
