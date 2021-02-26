import React from "react";
import burgerLogo from "../../assets/images/logo/Burger_King_2020.png";

import classes from "./Logo.module.css";

// style={{ height: props.height }}

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger Place" />
        </div>
    );
};

export default logo;
