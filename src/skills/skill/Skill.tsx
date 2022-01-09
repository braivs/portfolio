import React from 'react';
import s from './Skill.module.scss';

type SkillPropsType = {
    title: string
    logo: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.imgContainer}>
                <img src={props.logo} alt="imgMonitor"/>
            </div>
            <h3>{props.title}</h3>
        </div>
    );
}

