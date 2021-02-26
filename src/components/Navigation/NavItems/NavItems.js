import React from "react";
import NavItem from "./NavItem/NavItem";

import classes from "./NavItems.module.css";

const navitems = (props) => {
    return (
        <ul className={classes.NavItems}>
            <NavItem link="/">Home</NavItem>
            <NavItem link="/menu" exact>
                Order
            </NavItem>
            <NavItem link="/">Careers</NavItem>
            <NavItem link="/">About us</NavItem>
            <NavItem link="/">More</NavItem>
        </ul>
    );
};

export default navitems;
