import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Main/Menu/Menu";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./MenuPage.module.css";
import { Helmet } from "react-helmet-async";

const MenuPage = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Burger Place - Main Menu</title>
            </Helmet>
            <Toolbar />
            <section className={classes.MenuPage}>
                <div className={classes.MenuPageHeading}>
                    <h2>Our Menu</h2>
                </div>
                <Menu />
            </section>
            <Footer />
        </Fragment>
    );
};

export default MenuPage;
