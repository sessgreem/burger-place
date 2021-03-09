import React, { useState, useEffect, Fragment } from "react";
import SectionItem from "./SectionItem/SectionItem";
import classes from "./Sections.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import SmallSlider from "../../components/SmallSlider/SmallSlider";
import { useParams } from "react-router-dom";
const Sections = (props) => {
    const { sectionName } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [state] = useState({
        "Our Favorites": {
            sectionItems: [
                {
                    itemName: "Whopper",
                    itemOptions: [
                        {
                            optionName: "Small",
                            optionDescription:
                                "Small drink and Small Side Included",
                            optionCalories: "780 - 1.807",
                        },
                        {
                            optionName: "Medium",
                            optionDescription:
                                "Medium drink and Medium Side Included",
                            optionCalories: "1.980 - 2.807",
                        },
                    ],
                    itemCalories: "850 - 1,882",
                },
                {
                    itemName: "Whopper",
                    itemOptions: [
                        {
                            optionName: "Small",
                            optionDescription:
                                "Small drink and Small Side Included",
                            optionCalories: "780 - 1.807",
                        },
                        {
                            optionName: "Medium",
                            optionDescription:
                                "Medium drink and Medium Side Included",
                            optionCalories: "1.980 - 2.807",
                        },
                    ],
                    itemCalories: "850 - 1,882",
                },
                {
                    itemName: "Mini Shakes Vanilla",
                    itemOptions: [
                        {
                            optionName: "Vanilla",
                            optionDescription: "",
                            optionCalories: "365",
                        },
                        {
                            optionName: "Chocolate",
                            optionDescription: "",
                            optionCalories: "365",
                        },
                    ],
                    itemCalories: "365 - 403",
                },
            ],
        },
        Sweets: {
            sectionItems: [
                {
                    itemName: "Mini Shakes Vanilla",
                    itemOptions: [
                        {
                            optionName: "Vanilla",
                            optionDescription: "",
                            optionCalories: "365",
                        },
                        {
                            optionName: "Chocolate",
                            optionDescription: "",
                            optionCalories: "365",
                        },
                    ],
                },
            ],
        },
    });

    const sectionItems = state[sectionName].sectionItems.map((sectionItem) => {
        return (
            <SectionItem
                name={sectionItem.itemName}
                options={sectionItem.itemOptions}
                calories={sectionItem.itemCalories}
                section={sectionName}
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

export default Sections;
