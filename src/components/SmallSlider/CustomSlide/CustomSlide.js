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
            history.push(url);
        }
    };

    return (
        <div
            {...props}
            className={classes.CustomSlide}
            onMouseMove={() => setMouseMoved(true)}
            onMouseDown={() => setMouseMoved(false)}
            onMouseUp={() => handleClick()}
        >
            <NavLink to={url} activeClassName={classes.active}>
                <div className={classes.CustomSlideImg}>
                    <img src={props.img} alt={props.section} />
                </div>
                <span>{props.section}</span>
            </NavLink>
        </div>
    );
};

export default CustomSlide;
