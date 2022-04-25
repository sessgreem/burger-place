import React, { useRef } from "react";
import classes from "./BurgerMenu.module.css";
import xMark from "../../../assets/images/burger-nav-menu/xmark-solid.svg";
import useClickOutside from "../../../hooks/useClickOutside";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const BurgerMenu = (props) => {
    const { onCloseBurgerMenu, isOpen } = props;

    const wrapperRef = useRef(null);
    useClickOutside(wrapperRef, onCloseBurgerMenu);

    let isOpenClass = null;
    if (isOpen) {
        isOpenClass = classes.BurgerMenuOpen;
    }

    return (
        <div
            ref={wrapperRef}
            className={[classes.BurgerMenu, isOpenClass].join(" ")}
        >
            <img
                src={xMark}
                alt=""
                onClick={onCloseBurgerMenu}
                className={classes.BurgerCloseMark}
            />
            <Logo />
            <NavItems isBurger />
        </div>
    );
};

export default BurgerMenu;