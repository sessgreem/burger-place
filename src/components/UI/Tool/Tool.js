import React from "react";

import classes from "./Tool.module.css";

const Tool = ({ name, image }) => {
    return (
        <li className={classes.Tool}>
            <div className={classes.ToolImage}>
                <img src={image} alt="" />
            </div>
            <span>{name}</span>
        </li>
    );
};
export default Tool;
