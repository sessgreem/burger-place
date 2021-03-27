import React, { Component } from "react";
import classes from "./CustomSlide.module.css";
export default class CustomSlide extends Component {
    render() {
        const { img, index, sectionName, ...props } = this.props;
        return (
            <li {...props} className={classes.CustomSlide}>
                <div className={classes.CustomSlideImg}>
                    <img
                        src={img}
                        style={{ maxWidth: "100px" }}
                        alt="Slider section"
                    />
                </div>
                <span>{sectionName}</span>
            </li>
        );
    }
}
