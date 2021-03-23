import React from "react";
import classes from "./SectionItem.module.css";
import blurred from "../../../assets/images/burgers/imageedit_1_7225983991.webp";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import useStorageUrlDownload from "../../../hooks/useStorageUrlDownload";

const SectionItem = (props) => {
    const imageURL = useStorageUrlDownload(props.imgURL);

    return (
        <Link to={`/sections/${props.section}/${props.name}`}>
            <div className={classes.SectionItem}>
                <div className={classes.SectionItemImage}>
                    <ProgressiveImage src={imageURL} placeholder={blurred}>
                        {(src) => <img src={src} alt={props.imgAlt} />}
                    </ProgressiveImage>
                </div>
                <div className={classes.SectionItemDescription}>
                    <h3>{props.name}</h3>
                    <span>{props.calories} Cal</span>
                </div>
            </div>
        </Link>
    );
};

export default SectionItem;
