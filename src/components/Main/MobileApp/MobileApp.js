import classes from "./MobileApp.module.css";
import React from "react";
import mobilePhone from "../../../assets/images/main/mobilephone.webp";
import googlePlay from "../../../assets/images/app-download/Google_Play_Store_badge_EN.svg";
import appStore from "../../../assets/images/app-download/Download_on_the_App_Store_Badge.svg";

const appStoreUrl = "#";
const playStoreUrl = "#";

const MobileApp = () => {
    return (
        <section className={classes.MobileApp}>
            <div className={classes.MobileOffer}>
                <h2>Save $$$</h2>
                <h2>
                    With offers on <br />
                    demand
                </h2>
                <div className={classes.MobileAppDownload}>
                    <a href={playStoreUrl}>
                        <img src={appStore} alt="App Store" />
                    </a>
                    <a href={appStoreUrl}>
                        <img src={googlePlay} alt="Google Play" />
                    </a>
                </div>
                <p className={classes.MobileLegal}>
                    Apple and the Apple logo are trademarks of Apple Inc.,
                    registered in the U.S. and other countries. App Store is a
                    service mark of Apple Inc. Google Play is a trademark of
                    Google Inc. Terms apply.
                </p>
            </div>
            <div className={classes.MobileImage}>
                <img src={mobilePhone} alt="" role="presentation" />
            </div>
        </section>
    );
};

export default MobileApp;
