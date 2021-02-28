import classes from "./MobileApp.module.css";
import React from "react";
import mobilePhone from "../../../assets/images/mobilephone.webp";
const appStoreUrl = "#";
const playStoreUrl = "#";

const MobileApp = () => {
    return (
        <section className={classes.MobileApp}>
            <div className={classes.MobileImage}>
                <img src={mobilePhone} alt="Mobile Phone" />
            </div>
            <div className={classes.MobileOffer}>
                <h2>Save $$$</h2>
                <h2>
                    With offers on <br />
                    demand
                </h2>
                <div className={classes.MobileAppDownload}>
                    <a href={appStoreUrl}>Downloadappstore</a>
                    <a href={playStoreUrl}>downloadandroid</a>
                </div>
                <p className={classes.MobileLegal}>
                    Apple and the Apple logo are trademarks of Apple Inc.,
                    registered in the U.S. and other countries. App Store is a
                    service mark of Apple Inc. Google Play is a trademark of
                    Google Inc. Terms apply.
                </p>
            </div>
        </section>
    );
};

export default MobileApp;
