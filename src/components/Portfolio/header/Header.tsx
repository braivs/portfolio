import React from 'react';
import s from './Header.module.scss';
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";
import {ThemeToggle} from "../../../common/components/themeToggle/ThemeToggle";

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <Nav/>
                <ThemeToggle/>
                <BurgerNav />
            </div>
        </div>
    );
}

