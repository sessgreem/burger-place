import React, { useState } from "react";
import classes from "./Menu.module.css";
import Card from "./Card/Card";
const Menu = () => {
    const [cardInfo] = useState([
        {
            name: "Our favs",
            description: "a selection of our favs",
            imgURL:
                "../../../../assets/images/burgers/whopper-cheeseburger.png",
        },
        {
            name: "Drinks and Juices",
            description: "a selection of our favs2",
            imgURL:
                "../../../../assets/images/burgers/whopper-cheeseburger.png",
        },
    ]);

    const cards = cardInfo.map((card) => (
        <Card
            name={card.name}
            description={card.description}
            imgURL={card.imgURL}
        />
    ));

    return <section className={classes.Menu}>{cards}</section>;
};

export default Menu;
