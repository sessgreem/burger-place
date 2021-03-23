import React from "react";
import classes from "./CustomizationBackground.module.css";
// import hero from "../../../assets/images/hero.webp";
import useStorageUrlDownload from "../../../hooks/useStorageUrlDownload";
import useProgressiveImage from "../../../hooks/useProgressiveImage";
const CustomizationBackground = (props) => {
    const imageURL = useStorageUrlDownload(props.imgURL);
    const img = useProgressiveImage(imageURL, props.imgAlt);

    return (
        <div className={classes.CustomizationBackground}>
            <div className={classes.CustomizationHero}>{img}</div>
        </div>
    );
};

export default CustomizationBackground;
