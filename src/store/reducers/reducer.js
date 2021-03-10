// import * from "../actions/actionTypes";

const initialState = {
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
                itemName: "Impossible Whopper",
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
};

const reducer = (state = initialState, action) => {
    // switch (key) {
    //     case value:
    //     default:
    //         return state;
    // }
    return state;
};

export default reducer;
