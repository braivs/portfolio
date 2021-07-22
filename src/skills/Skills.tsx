import React from 'react';
import s from './Skills.module.scss';
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export function Skills() {
  return (
    <div className={s.skillsBlock}>
      <div className={`${sContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, obcaecati?'}/>
          <Skill title={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem, dolores fuga nesciunt ratione voluptates.'}/>
          <Skill title={'JS'} description={'Lorem ipsum dolor sit amet.'}/>
          <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo.'}/>
          <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, inventore tempora.'}/>
        </div>
      </div>
    </div>
  );
}

