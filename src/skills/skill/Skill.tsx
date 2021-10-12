import React from 'react';
import s from './Skill.module.scss';
import sContainers from '../../common/styles/Container.module.scss'
import imgMonitor from '../../assets/image/monitor.jpg'

type SkillPropsType = {
    title: string
    logo: string
    description: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={`${sContainers.element} ${s.skill}`}>
            <img src={props.logo} alt="imgMonitor"/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

