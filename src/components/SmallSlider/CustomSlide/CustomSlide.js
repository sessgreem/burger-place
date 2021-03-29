import React, { useState } from "react";
import classes from "./CustomSlide.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { formatToURL } from "../../../shared/formatURL";

const CustomSlide = (props) => {
    const url = `/sections/${formatToURL(props.section)}`;
    const history = useHistory();

    const [mouseMoved, setMouseMoved] = useState(false);

    const handleClick = () => {
        if (!mouseMoved) {
            console.log("will route");
            // history.push(url);
        }
    };
    return (
        <li
            {...props}
            className={classes.CustomSlide}
            onMouseMove={() => setMouseMoved(true)}
            onMouseDown={() => setMouseMoved(false)}
            onMouseUp={() => handleClick()}
        >
            <NavLink to={url} activeClassName={classes.active}>
                <div className={classes.CustomSlideImg}>
                    <img src={props.img} alt="Slider section" />
                </div>
                <span>{props.section}</span>
            </NavLink>
        </li>
    );
};

export default CustomSlide;
