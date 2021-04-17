import React from "react";
import NavItem from "./NavItem/NavItem";

import classes from "./NavItems.module.css";

const navitems = (props) => {
    return (
        <ul className={classes.NavItems}>
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

export default navitems;
