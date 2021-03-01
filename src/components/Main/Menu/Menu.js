import React, { useState } from "react";
import classes from "./Menu.module.css";
import Card from "./Card/Card";

// import burger from "../../../assets/images/burgers/whopper-cheeseburger.png";
import ourFavorites from "../../../assets/images/our_favorites_section.webp";

const Menu = () => {
    const [cardInfo] = useState([
        {
            name: "Our Favorites",
            description: "A selection of our favorite items for you.",
            img: ourFavorites,
        },
        {
            name: "Our Favorites",
            description: "A selection of our favorite items for you.",
            img: ourFavorites,
        },
        {
            name: "Our Favorites",
            description: "A selection of our favorite items for you.",
            img: ourFavorites,
        },
    ]);

    const cards = cardInfo.map((card) => (
        <Card name={card.name} description={card.description} img={card.img} />
    ));

    return (
        <section className={classes.Menu}>
            <h2 className={classes.MenuHeading}>Trending</h2>
            <div className={classes.MenuCards}>{cards}</div>
        </section>
    );
};

export default Menu;
