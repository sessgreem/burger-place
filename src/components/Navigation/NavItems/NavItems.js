import React from "react";
import NavItem from "./NavItem/NavItem";

import classes from "./NavItems.module.css";

const NavItems = (props) => {
    const { isBurger } = props;

    let isBurgerClass = null;
    if (isBurger) isBurgerClass = classes.NavItemsBurger;

    return (
        <ul className={[classes.NavItems, isBurgerClass].join(" ")}>
            <NavItem link="/" exact>
                Home
            </NavItem>
            <NavItem link="/menu" exact>
                Menu
            </NavItem>
            <NavItem link="/checkout" exact>
                Checkout
            </NavItem>
            <NavItem link="/about" exact>
                About
            </NavItem>
        </ul>
    );
};

export default NavItems;
