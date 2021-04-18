import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./About.module.css";
const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Burger Place - About</title>
            </Helmet>
            <Toolbar />
            <div className={classes.AboutPageHeading}>
                <h2>Thank you for visiting my React App!</h2>
            </div>
            <div className={classes.AboutMessage}>
                <p>
                    Thank you for visiting my React Project. This was a lot of
                    work, but it was really fun to do! The goal of the Project
                    was to improve my knowledge as a software developer and
                    particularly my skills with the React Framework. The reason
                    why I chose to clone this particular website was because it
                    was going to be challenging and that it had a really good
                    Design so that I could focus on the User Interface,
                    functionality and business logic, which is what I really
                    love doing.
                </p>
                <p>Tools used for the project:</p>
                <p>
                    I can't wait for the next opportunities! To contact me you
                    can email me at <b>sessgreem@gmail.com</b>
                </p>
                <p>Thanks again! - Viktor Ivanov</p>
            </div>
        </Fragment>
    );
};

export default About;
