import React, { Fragment, useState, useEffect } from "react";
import classes from "./Toolbar.module.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Actions from "../Actions/Actions";
import Cart from "../../Cart/Cart";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import barsSolid from "../../../assets/images/burger-nav-menu/bars-solid.svg";

const Toolbar = ({ openCart = false }) => {
    const [cartVisibility, setCartVisibility] = useState(openCart);
    const [burgerMenu, setBurgerMenu] = useState(false);

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
            <BurgerMenu
                isOpen={burgerMenu}
                onCloseBurgerMenu={() => setBurgerMenu(false)}
            />
            <header className={classes.Toolbar}>
                <nav>
                    <div className={classes.NavItems}>
                        <NavItems />
                        <img
                            src={barsSolid}
                            alt=""
                            className={classes.BurgerMenuButton}
                            onClick={() => setBurgerMenu(true)}
                        />
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
