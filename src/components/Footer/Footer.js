import classes from "./Footer.module.css";
import React from "react";
import { Link } from "react-router-dom";

const url = "#";

const Footer = () => {
    return (
        <footer>
            <div className={classes.FooterNavColumns}>
                <div className={classes.FooterColumn}>
                    <h2>BPC INFO</h2>
                    <ul>
                        <li>
                            <a target="_blank" rel="noreferrer" href={url}>
                                About BP
                            </a>
                        </li>
                        <li>
                            <a href={url}>Trademarks Notice</a>
                        </li>
                        <li>
                            <a href={url}>Food quality</a>
                        </li>
                        <li>
                            <a href={url}>News & Prices</a>
                        </li>
                        <li>
                            <a href={url}>Global Media Contracts</a>
                        </li>
                        <li>
                            <a href={url}>Investor Relations</a>
                        </li>
                        <li>
                            <a href={url}>Franchising</a>
                        </li>
                        <li>
                            <a href={url}>International</a>
                        </li>
                        <li>
                            <a href={url}>Menu</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.FooterColumn}>
                    <h2>MY BP</h2>
                    <ul>
                        <li>
                            <a href={url}>BK APP</a>
                        </li>
                        <li>
                            <a href={url}>Gift Cards / Crown Cards</a>
                        </li>
                        <li>
                            <a href={url}>Reload Card</a>
                        </li>
                        <li>
                            <a href={url}>Check Card Balance</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.FooterColumn}>
                    <h2>Careers</h2>
                    <ul>
                        <li>
                            <a href={url}>Careers Home</a>
                        </li>
                        <li>
                            <a href={url}>Opportunities</a>
                        </li>
                        <li>
                            <a href={url}>Apply</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.FooterColumn}>
                    <h2>BP Cares</h2>
                    <ul>
                        <li>
                            <a href={url}>Nutrition Explorer</a>
                        </li>
                        <li>
                            <a href={url}>Download Allergens</a>
                        </li>
                        <li>
                            <a href={url}>Allegergens View in Browser</a>
                        </li>
                        <li>
                            <a href={url}>Privacy Policy</a>
                        </li>
                        <li>
                            <a href={url}>
                                Do Not Sell My Personal Information
                            </a>
                        </li>
                        <li>
                            <a href={url}>Responsibility</a>
                        </li>
                        <li>
                            <a href={url}>Diversity</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.FooterRowContainer}>
                <div className={classes.FooterWordmarkSocial}>
                    <Link to="/">
                        {/* <img
                            className={classes.FooterLogo}
                            src={burgerLogo}
                            alt="Logo"
                        /> */}
                        <h2 className={classes.LogoText}>Burger Place</h2>
                    </Link>
                    <div className={classes.FooterSocials}>
                        <div className={classes.FooterIcon}>
                            <a href={url}>
                                <img src="" alt="Social Icon" />
                            </a>
                        </div>
                        <div className={classes.FooterIcon}>
                            <a href={url}>
                                <img src="" alt="Social Icon" />
                            </a>
                        </div>
                        <div className={classes.FooterIcon}>
                            <a href={url}>
                                <img src="" alt="Social Icon" />
                            </a>
                        </div>
                        <div className={classes.FooterIcon}>
                            <a href={url}>
                                <img src="" alt="Social Icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.FooterHorizontalLinks}>
                    <a href={url}>Policies</a>
                    <a href={url}>Terms of Service</a>
                    <a href={url}>Accessibility</a>
                    <a href={url}>Contact Us</a>
                </div>
                <p>
                    TM & Copyright 2021 Burger Place Corporation. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
