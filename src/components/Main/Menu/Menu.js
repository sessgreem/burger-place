import React, { useState } from "react";
import classes from "./Menu.module.css";
import Card from "./Card/Card";

import burger from "../../../assets/images/burgers/whopper-cheeseburger.png";

const Menu = () => {
    const [cardInfo] = useState([
        {
            name: "Our favs",
            description: "a selection of our favs",
            img: burger,
        },
        {
            name: "Drinks and Juices",
            description: "a selection of our favs2",
            img: burger,
        },
    ]);

    const cards = cardInfo.map((card) => (
        <Card name={card.name} description={card.description} img={card.img} />
    ));

    return <section className={classes.Menu}>{cards}</section>;
};

export default Menu;
