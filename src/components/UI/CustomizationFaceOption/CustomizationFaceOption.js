import React from "react";
import classes from "./CustomizationFaceOption.module.css";
import useStorageUrlDownload from "../../../hooks/useStorageUrlDownload";

const CustomizationFaceOption = (props) => {
    const imageURL = useStorageUrlDownload(props.imgURL);

    const optionClasses = [classes.CustomizationFaceOptionImage];

    const isSelected = props.selected === props.name;
    if (isSelected) {
        optionClasses.push(classes.Selected);
    }

    return (
        <div
            className={classes.CustomizationFaceOption}
            onClick={() => props.changedSide(props.name)}
        >
            <div className={optionClasses.join(" ")}>
                <img src={imageURL} alt={props.alt} />
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
