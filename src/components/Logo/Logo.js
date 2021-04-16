import React from "react";
import burgerLogo from "../../assets/images/logo/burger-place.png";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <Link to="/">
            <div className={classes.Logo}>
                <img src={burgerLogo} alt="Burger Place" />
            </div>
        </Link>
    );
};

export default Logo;
