import React from 'react';
import s from './Skill.module.scss';

type SkillPropsType = {
    title: string
    logo: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <img src={props.logo} alt="imgMonitor"/>
            <h3>{props.title}</h3>
        </div>
    );
}

