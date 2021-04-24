import React, { useEffect, Fragment } from "react";
import SectionItem from "../../components/Sections/SectionItem/SectionItem";
import classes from "./Sections.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import SmallSlider from "../../components/SmallSlider/SmallSlider";
import ReturnButton from "../../components/UI/ReturnButton/ReturnButton";
import { Redirect, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { formatFromURL } from "../../shared/formatURL";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Sections = (props) => {
    let { sectionName } = useParams();
    sectionName = formatFromURL(sectionName);

    const location = useLocation();
    const toOpenCart = location.state?.toOpenCart;

    useEffect(() => {
        const timeout = setTimeout(() => window.scrollTo(0, 0), 1);
        return () => clearTimeout(timeout);
    }, [location]);

    const sections = props.menu[sectionName]?.sectionItems;
    if (!sections) {
        return <Redirect to="/menu"></Redirect>;
    }
    // this type is for the blurred image type passed in as a property - src\hooks\useProgressiveImage.js
    const sectionType = props.menu[sectionName].sectionType
        ? props.menu[sectionName].sectionType
        : null;

    const sectionItems = Object.keys(sections).map((section) => {
        return (
            <SectionItem
                name={section}
                options={sections[section].itemOptions}
                calories={sections[section].itemCalories}
                section={sectionName}
                key={section}
                imgURL={sections[section].itemImgURL}
                imgAlt={section}
                blurredType={sectionType}
            />
        );
    });

    return (
        <Fragment>
            <Helmet>
                <title>Burger Place - {sectionName}</title>
            </Helmet>
            <Toolbar openCart={toOpenCart} />
            <SmallSlider />
            <ReturnButton />
            <section className={classes.Sections}>{sectionItems}</section>
            <Footer />
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
    };
};

export default connect(mapStateToProps)(Sections);
