import React, { Fragment } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Hero from "../../components/Main/Hero/Hero";
import Menu from "../../components/Main/Menu/Menu";
import MobileApp from "../../components/Main/MobileApp/MobileApp";
import Footer from "../../components/Footer/Footer";
const Home = (props) => {
    return (
        <Fragment>
            <Toolbar />
            <Hero />
            <Menu />
            <MobileApp />
            <Footer />
        </Fragment>
    );
};

export default Home;
