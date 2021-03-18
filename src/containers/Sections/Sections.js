import React, { useEffect, Fragment } from "react";
import SectionItem from "../../components/Sections/SectionItem/SectionItem";
import classes from "./Sections.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import SmallSlider from "../../components/SmallSlider/SmallSlider";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Sections = (props) => {
    const { sectionName } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = props.menu[sectionName].sectionItems;
    const sectionItems = Object.keys(sections).map((section) => {
        return (
            <SectionItem
                name={section}
                options={sections[section].itemOptions}
                calories={sections[section].itemCalories}
                section={sectionName}
                key={section}
            />
        );
    });

    return (
        <Fragment>
            <Toolbar />
            <SmallSlider />
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
