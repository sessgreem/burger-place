import React, { Fragment } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Hero from "../../components/Main/Hero/Hero";
import Menu from "../../components/Main/Menu/Menu";

const home = (props) => {
    return (
        <Fragment>
            <Toolbar />
            <Hero />
            <Menu />
        </Fragment>
    );
};

export default home;
