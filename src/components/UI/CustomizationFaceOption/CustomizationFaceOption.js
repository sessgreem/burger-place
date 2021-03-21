import React, { useState, useEffect } from "react";
import classes from "./CustomizationFaceOption.module.css";
// import ClassicFries from "../../../assets/images/faceoptions/classic_fries.webp";
import OnionRings from "../../../assets/images/faceoptions/onion_rings.webp";
import { storage } from "./../../../firebase/index";
const CustomizationFaceOption = (props) => {
    // const files = ["image1.png", "image2.png"];
    // files.map(async (filename) => {
    //     const url = await storage
    //         .ref(`/covers/${filename}`)
    //         .getDownloadURL();
    //     console.log("Got download url: ", url);
    // });

    const [imageUrl, setImageUrl] = useState(null);

    const optionClasses = [classes.CustomizationFaceOptionImage];

    const isSelected = props.selected === props.name;
    if (isSelected) {
        optionClasses.push(classes.Selected);
    }

    useEffect(() => {
        let img;
        switch (props.name) {
            case "Classic Fries":
                // img = <img src={ClassicFries} alt="Classic Fries" />;
                const starsRef = storage.ref("classic_fries.webp");
                starsRef.getDownloadURL().then((url) => {
                    setImageUrl(url);
                    console.log(url);
                });
                break;
            case "Onion Rings":
                img = <img src={OnionRings} alt="Onion Rings" />;
                break;
            default:
                img = null;
                break;
        }
    }, [props.name]);

    return (
        <div
            className={classes.CustomizationFaceOption}
            onClick={() => props.changedSide(props.name)}
        >
            <div className={optionClasses.join(" ")}>
                <img src={imageUrl} alt="Classic Fries" />
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
