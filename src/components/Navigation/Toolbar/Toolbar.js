import React, { Fragment, useState, useEffect } from "react";
import classes from "./Toolbar.module.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Actions from "../Actions/Actions";
import Cart from "../../Cart/Cart";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import barsSolid from "../../../assets/images/burger-nav-menu/bars-solid.svg";

const Toolbar = ({ openCart = false }) => {
    const [cartVisible, setCartVisible] = useState(openCart);
    const [menuVisible, setMenuVisible] = useState(false);

    const cartClickedHandler = () => {
        setCartVisible(!cartVisible);
    };

    let timeout;
    const cartClickedOutside = () => {
        timeout = setTimeout(() => setCartVisible(false), 100);
    };
    useEffect(() => {
        return () => clearTimeout(timeout);
    });

    return (
        <Fragment>
            <BurgerMenu
                isOpen={menuVisible}
                onCloseBurgerMenu={() => setMenuVisible(false)}
            />
            <header className={classes.Toolbar}>
                <nav>
                    <div className={classes.NavItems}>
                        <NavItems />
                        <img
                            src={barsSolid}
                            alt=""
                            className={classes.BurgerMenuButton}
                            onClick={() => setMenuVisible(true)}
                        />
                    </div>
                    <div className={classes.Logo}>
                        <Logo />
                    </div>
                    <div className={classes.Actions}>
                        <Actions cartClicked={cartClickedHandler} />
                        <Cart
                            visibility={cartVisible}
                            clickedOutside={cartClickedOutside}
                        />
                    </div>
                </nav>
            </header>
        </Fragment>
    );
};

export default Toolbar;
