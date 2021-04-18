import React from "react";
import classes from "./SectionItem.module.css";
import { Link } from "react-router-dom";
import useStorageUrlDownload from "../../../hooks/useStorageUrlDownload";
import useProgressiveImage from "../../../hooks/useProgressiveImage";
import { formatToURL } from "../../../shared/formatURL";

const SectionItem = (props) => {
    const imageURL = useStorageUrlDownload(props.imgURL);
    const imageElement = useProgressiveImage(
        imageURL,
        props.name,
        props.blurredType
    );
    const url = `/sections/${formatToURL(props.section)}/${props.name}`;

    return (
        <Link to={url}>
            <div className={classes.SectionItem}>
                <div className={classes.SectionItemImage}>{imageElement}</div>
                <div className={classes.SectionItemDescription}>
                    <h3>{props.name}</h3>
                    <span>{props.calories} Cal</span>
                </div>
            </div>
        </Link>
    );
};

export default SectionItem;
