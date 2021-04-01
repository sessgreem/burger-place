import React from "react";
import Button from "../Button/Button";
import classes from "./Incrementor.module.css";
const Incrementor = () => {
    return (
        <div className={classes.Incrementor}>
            <Button btnType="Incrementor">
                <svg
                    className={classes.IncrementorIcon}
                    viewBox="0 0 20 20"
                    disabled={true}
                >
                    <title>Circle Minus Icon</title>
                    <path d="M10 0a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 0 10 10 10 0 0 1 10 0z"></path>
                    <path
                        fill="#F5EBDC"
                        d="M15.19609,8.82488L11.09504,8.82488L9.08272,8.82488L5.00714,8.82488A1.00616,0.99585 0 1 0 5.00714,10.81658L15.19609,10.81658A1.00616,0.99585 0 0 0 15.19609,8.82488z"
                    ></path>
                </svg>
            </Button>
            <div>
                <span className={classes.IncremetorNumber}> 1 </span>
            </div>
            <Button btnType="Incrementor">
                <svg
                    className={classes.IncrementorIcon}
                    viewBox="0 0 20 20"
                    disabled={false}
                >
                    <title>Circle Plus Icon</title>
                    <path d="M10 0a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 0 10 10 10 0 0 1 10 0z"></path>
                    <path
                        fill="#F5EBDC"
                        d="M14 9.2h-3.22V6A.79.79 0 0 0 9.2 6v3.2H6a.79.79 0 1 0 0 1.58h3.2V14a.79.79 0 1 0 1.58 0v-3.22H14a.79.79 0 0 0 0-1.58z"
                    ></path>
                </svg>
            </Button>
        </div>
    );
};

export default Incrementor;
