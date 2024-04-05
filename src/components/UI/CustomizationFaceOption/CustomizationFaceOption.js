import React from "react";
import classes from "./CustomizationFaceOption.module.css";
import useStorageUrlDownload from "../../../hooks/useStorageUrlDownload";

const CustomizationFaceOption = (props) => {
    const { imgURL, selected, name, alt, size, calories, changedSide } = props;
    const imageURL = useStorageUrlDownload(imgURL);

    const optionClasses = [classes.CustomizationFaceOptionImage];

    // Is it selected
    if (selected === name) {
        optionClasses.push(classes.Selected);
    }

    return (
        <div
            className={classes.CustomizationFaceOption}
            onClick={() => changedSide(name)}
        >
            <div className={optionClasses.join(" ")}>
                <img src={imageURL} alt={alt} />
            </div>

            <div className={classes.CustomizationFaceOptionDescription}>
                <h4>
                    {size} {name}
                </h4>
                <h5>{calories} Cal</h5>
            </div>
        </div>
    );
};

export default CustomizationFaceOption;
