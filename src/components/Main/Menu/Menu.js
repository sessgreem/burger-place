import React, { useState, useEffect, Fragment } from "react";
import classes from "./Menu.module.css";
import Card from "./Card/Card";
import ourFavorites from "../../../assets/images/menu/our_favorites_section.webp";
import sweets from "../../../assets/images/menu/sweets.webp";
import familyBundle from "../../../assets/images/menu/familybundle.webp";
import chickenFish from "../../../assets/images/menu/chiken.webp";
import queenJr from "../../../assets/images/menu/f4dc27eb7337f7cbd12d3ccd840e6a031fcba622-360x270.webp";
import drinksCoffe from "../../../assets/images/menu/drinksandcoffe.webp";
import { formatToURL } from "../../../shared/formatURL";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Menu = (props) => {
    const history = useHistory();

    const [cardInfo] = useState([
        {
            name: "Family Bundles",
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
            name: "King Jr",
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

    const location = useLocation();
    useEffect(() => {
        const timeout = setTimeout(() => window.scrollTo(0, 0), 1);
        return () => clearTimeout(timeout);
    }, [location]);

    const cardClickedHandler = (sectionName) => {
        history.push({ pathname: `/sections/${formatToURL(sectionName)}` });
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
        <Fragment>
            <section className={classes.Menu}>
                <div className={classes.MenuCards}>{cards}</div>
            </section>
        </Fragment>
    );
};

export default Menu;
