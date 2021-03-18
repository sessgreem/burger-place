import React, { Fragment, useState, useEffect } from "react";

import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Actions from "../Actions/Actions";

import classes from "./Toolbar.module.css";
import Cart from "../../Cart/Cart";

const Toolbar = () => {
    const [cartVisibility, setCartVisibility] = useState(false);

    const signUpHandler = () => {
        console.log("signupclicked");
    };

    const cartHandler = () => {
        setCartVisibility(!cartVisibility);
    };

    // small technical workaround
    let timeout;

    useEffect(() => {
        return () => clearTimeout(timeout);
    });

    // TODO https://www.npmjs.com/package/react-onclickoutside
    const cartClickedOutside = () => {
        timeout = setTimeout(() => setCartVisibility(false), 150);
    };

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
                            singUpClicked={signUpHandler}
                            cartClicked={cartHandler}
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
