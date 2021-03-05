import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Main/Menu/Menu";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./MenuPage.module.css";

const MenuPage = () => {
    return (
        <Fragment>
            <Toolbar />
            <section className={classes.MenuPage}>
                <div className={classes.MenuPageHeading}>
                    <h2>Our menu</h2>
                </div>
                <Menu />
            </section>
            <Footer />
        </Fragment>
    );
};

export default MenuPage;
