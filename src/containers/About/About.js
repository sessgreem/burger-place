import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./About.module.css";
import reactIcon from "../../assets/images/tools-icons/react-icon-v2.svg";
import reactRouterIcon from "../../assets/images/tools-icons/react-router.svg";
import reduxIcon from "../../assets/images/tools-icons/redux.svg";
import firebaseIcon from "../../assets/images/tools-icons/Firebase_Logo_Logomark.svg";
import vsCodeIcon from "../../assets/images/tools-icons/Visual_Studio_Code_1.35_icon.svg";
import adobeXdIcon from "../../assets/images/tools-icons/Adobe_XD_CC_icon.svg";
import adobePhotoshopIcon from "../../assets/images/tools-icons/Adobe_Photoshop_CC_icon.svg";
import Button from "../../components/UI/Button/Button";
import { useHistory } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import Tool from "../../components/UI/Tool/Tool";

const toolsMap = [
    {
        name: "React Hooks",
        image: reactIcon,
    },
    {
        name: "Redux",
        image: reduxIcon,
    },
    {
        name: "React Router",
        image: reactRouterIcon,
    },
    {
        name: "Firebase",
        image: firebaseIcon,
    },
    {
        name: "Code",
        image: vsCodeIcon,
    },
    {
        name: "Experience Design",
        image: adobeXdIcon,
    },
    {
        name: "Photoshop CC",
        image: adobePhotoshopIcon,
    },
];

const About = () => {
    const history = useHistory();

    useScrollToTop();

    const backToHomeClicked = () => {
        history.push("/");
    };

    const tools = toolsMap.map((tool, index) => {
        return <Tool key={index} name={tool.name} image={tool.image} />;
    });

    return (
        <Fragment>
            <Helmet>
                <title>Burger Place - Thank you!</title>
            </Helmet>
            <Toolbar />
            <div className={classes.AboutPageHeading}>
                <h2>Thank you for visiting my React App!</h2>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.AboutMessage}>
                    <p>
                        Thank you for visiting my React Project. This was a lot
                        of work, but it was really fun to do! The goal of the
                        Project was to improve my knowledge as a software
                        developer and particularly my skills with the React
                        Framework. The reason why I chose to clone that
                        particular website was because it was going to be
                        challenging and that it had a really good Design so that
                        I could focus on the User Interface, Functionality and
                        Business logic, which is what I really love doing.
                    </p>
                    <p>Tools used for the project:</p>
                    <ul className={classes.ToolsList}>{tools}</ul>
                    <p>
                        I can't wait for future opportunities! To contact me you
                        can email me at <b>sessgreem@gmail.com</b>
                    </p>
                    <p>
                        Thanks again! - <i>Viktor Ivanov</i>
                    </p>
                </div>
                <Button btnType="Secondary" clicked={backToHomeClicked}>
                    Back to Home
                </Button>
            </div>
        </Fragment>
    );
};

export default About;
