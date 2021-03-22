import React, { useState, useEffect } from "react";
import classes from "./CustomizationFaceOption.module.css";

import { storage } from "./../../../firebase/index";
const CustomizationFaceOption = (props) => {
    const [imageUrl, setImageUrl] = useState(null);

    const optionClasses = [classes.CustomizationFaceOptionImage];

    const isSelected = props.selected === props.name;
    if (isSelected) {
        optionClasses.push(classes.Selected);
    }

    useEffect(() => {
        console.log(props.imgURL);
        const imgRef = storage.refFromURL(props.imgURL);
        imgRef.getDownloadURL().then((url) => {
            setImageUrl(url);
            console.log(url);
        });
    }, [props.imgURL]);

    return (
        <div
            className={classes.CustomizationFaceOption}
            onClick={() => props.changedSide(props.name)}
        >
            <div className={optionClasses.join(" ")}>
                <img src={imageUrl} alt={props.alt} />
            </div>
            <div className={classes.CustomizationFaceOptionDescription}>
                <h4>
                    {props.size} {props.name}
                </h4>
                <h5>{props.calories} Cal</h5>
            </div>
        </div>
    );
};

export default CustomizationFaceOption;
