import React, { Fragment } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Hero from "../../components/Main/Hero/Hero";

const home = (props) => {
    return (
        <Fragment>
            <Toolbar />
            <Hero />
        </Fragment>
    );
};

export default home;
