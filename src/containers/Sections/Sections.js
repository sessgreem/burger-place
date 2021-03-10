import React, { useEffect, Fragment } from "react";
import SectionItem from "./SectionItem/SectionItem";
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

    const sectionItems = props.menu[sectionName].sectionItems.map(
        (sectionItem) => {
            return (
                <SectionItem
                    name={sectionItem.itemName}
                    options={sectionItem.itemOptions}
                    calories={sectionItem.itemCalories}
                    section={sectionName}
                />
            );
        }
    );

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
        menu: state,
    };
};

export default connect(mapStateToProps)(Sections);
