import React, { Fragment, useState, useEffect } from "react";
import classes from "./Toolbar.module.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Actions from "../Actions/Actions";
import Cart from "../../Cart/Cart";

const Toolbar = ({ openCart = false }) => {
    const [cartVisibility, setCartVisibility] = useState(openCart);

    const cartClickedHandler = () => {
        setCartVisibility(!cartVisibility);
    };

    let timeout;
    const cartClickedOutside = () => {
        timeout = setTimeout(() => setCartVisibility(false), 100);
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
                        <Actions cartClicked={cartClickedHandler} />
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
