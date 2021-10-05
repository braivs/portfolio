import React from 'react';
import s from './Skill.module.scss';
import sContainers from '../../common/styles/Container.module.css'
import imgMonitor from '../../assets/image/monitor.jpg'

type SkillPropsType = {
    title: string
    description: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={`${sContainers.element} ${s.skill}`}>
            <img src={imgMonitor} alt="imgMonitor"/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

