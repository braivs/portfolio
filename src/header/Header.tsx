import React from 'react';
import s from './Header.module.scss';
import {Nav} from "../nav/Nav";
import sContainers from "../common/styles/Container.module.scss";

export function Header() {
    return (
        <div className={s.header}>
            <div className={`${sContainers.container} ${s.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
}

