import React, { Fragment } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Hero from "../../components/Main/Hero/Hero";
import Menu from "../../components/Main/Menu/Menu";
import MobileApp from "../../components/Main/MobileApp/MobileApp";
import Footer from "../../components/Footer/Footer";
const Home = (props) => {
    const menuHeading = (
        <h2
            style={{
                fontSize: "2.25rem",
                textAlign: "center",
                marginTop: "3rem",
                fontWeight: "normal",
            }}
        >
            Trending
        </h2>
    );
    return (
        <Fragment>
            <Toolbar />
            <Hero />
            {menuHeading}
            <Menu />
            <MobileApp />
            <Footer />
        </Fragment>
    );
};

export default Home;
