import React from 'react';
import s from './Header.module.scss';
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

export function Header() {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <Nav/>
                <BurgerNav />
            </div>
        </div>
    );
}

