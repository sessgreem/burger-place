import React, { Component } from "react";
import burger from "../../../assets/images/burgers/whopper-cheeseburger-right10deg.png";
import classes from "./CustomSlide.module.css";
export default class CustomSlide extends Component {
    render() {
        const { index, ...props } = this.props;
        return (
            <li {...props} className={classes.CustomSlide}>
                <div className={classes.CustomSlideImg}>
                    <img
                        src={burger}
                        style={{ maxWidth: "100px" }}
                        alt="test"
                    />
                </div>
                <span>King Jr.</span>
            </li>
        );
    }
}
