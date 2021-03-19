// import * from "../actions/actionTypes";
const initialState = {
    "Our Favorites": {
        sectionItems: {
            Whopper: {
                itemOptions: {
                    "A La Carte": {
                        optionDescription: "Entree only ",
                        optionCalories: "580 - 800",
                        optionPrice: 5.39,
                    },
                    Small: {
                        optionDescription:
                            "Small drink and Small Side Included",
                        optionCalories: "780 - 1.807",
                        optionPrice: 7.69,
                    },
                    Medium: {
                        optionDescription:
                            "Medium drink and Medium Side Included",
                        optionCalories: "1.980 - 2.807",
                        optionPrice: 8.49,
                    },
                    Large: {
                        optionDescription:
                            "Large drink and Large Side Included",
                        optionCalories: "903 - 2.207",
                        optionPrice: 8.99,
                    },
                },
                itemSides: {
                    "Classic Fries": {
                        optionCalories: "383",
                    },
                    "Onion Rings": {
                        optionCalories: "564",
                    },
                },
                itemCalories: "850 - 1,882",
                itemDescription:
                    "Our Whopper Sandwich is a ¼ lb* of savory flame-grilled beef topped with juicy tomatoes, fresh lettuce, creamy mayonnaise, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.",
                itemDefaultOptionName: "Medium",
                itemDefaultSideName: "Classic Fries",
            },
        },
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
