import React, { useState } from "react";
import classes from "./Menu.module.css";
import Card from "./Card/Card";

import ourFavorites from "../../../assets/images/menu/our_favorites_section.webp";

import sweets from "../../../assets/images/menu/sweets.webp";
import familyBundle from "../../../assets/images/menu/familybundle.webp";
import chickenFish from "../../../assets/images/menu/chiken.webp";
import queenJr from "../../../assets/images/menu/f4dc27eb7337f7cbd12d3ccd840e6a031fcba622-360x270.webp";
import drinksCoffe from "../../../assets/images/menu/drinksandcoffe.webp";

// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Menu = (props) => {
    let history = useHistory();

    const [cardInfo] = useState([
        {
            name: "Family Burgers",
            description: "The best food bundles for every family!",
            img: familyBundle,
        },
        {
            name: "Our Favorites",
            description: "A selection of our favorite items for you.",
            img: ourFavorites,
        },
        {
            name: "Chicken & Fish",
            description: "Do you prefer Chicken? We have that too. ",
            img: chickenFish,
        },
        {
            name: "Queen Jr",
            description: "The Queen is waiting for you!",
            img: queenJr,
        },
        {
            name: "Drinks & Coffee",
            description: "Get you favorite drinks from us!",
            img: drinksCoffe,
        },
        {
            name: "Sweets",
            description: "Feeling something sweet? You want to see theese!",
            img: sweets,
        },
    ]);

    // ? Route names need to be adjusted - maybe with function like this
    // const transformIntoPath = (string) => {
    //     const result = string.replace(' ', '-');
    //     return result.toLowerCase();
    // };

    const cardClickedHandler = (sectionName) => {
        history.push({ pathname: `/sections/${sectionName}` });
    };

    const cards = cardInfo.map((card) => (
        <Card
            name={card.name}
            description={card.description}
            img={card.img}
            cardClickedHandler={cardClickedHandler}
            key={card.name}
        />
    ));

    return (
        <section className={classes.Menu}>
            <div className={classes.MenuCards}>{cards}</div>
        </section>
    );
};

export default Menu;
