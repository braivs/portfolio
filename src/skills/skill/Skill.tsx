import React from 'react';
import s from './Skill.module.scss';
import sContainers from '../../common/styles/Containers.module.css'

type SkillPropsType = {
  title: string
  description: string
}

export function Skill(props: SkillPropsType) {
  return (
    <div className={`${sContainers.element} ${s.skill}`}>
      <div className={s.icon}></div>
      <h3>{props.title}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  );
}

