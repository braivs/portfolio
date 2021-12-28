import React, {useState} from 'react';
import s from './BurgerNav.module.scss';
import {Link} from "react-scroll";
import {faArrowRight, faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Link activeClass={s.active} to="main" spy={true} smooth={true} offset={-80} duration={500}>Main</Link>
                <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={-80} duration={500}>Skills</Link>
                <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={-80}
                      duration={500}>Projects</Link>
                <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={-80}
                      duration={500}>Contacts</Link>
            </div>
                <FontAwesomeIcon icon={faBars} className={s.burgerBtn} onClick={onBurgerBtnClick}/>
        </div>
    );
}

