import React, { useState } from "react";
import SectionItem from "./SectionItem/SectionItem";
const Sections = (props) => {
    const [state] = useState({
        ourFavorites: {
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
                },
            ],
        },
        sweets: {
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

    console.log(state["ourFavorites"].sectionItems);

    const sectionItems = state[props.sectionName].sectionItems.map(
        (sectionItem) => {
            return (
                <SectionItem
                    name={sectionItem.itemName}
                    options={sectionItem.itemOptions}
                />
            );
        }
    );

    return <div>{sectionItems}</div>;
};

export default Sections;
