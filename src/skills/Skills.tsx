import React from 'react';
import s from './Skills.module.scss';
import sContainers from '../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import {v1} from "uuid";
import {Title} from "../common/components/title/Title";

const skills = [
  {id: v1(), title: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, obcaecati?'},
  {id: v1(), title: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem, dolores fuga nesciunt ratione voluptates.'},
  {id: v1(), title: 'JS', description: 'Lorem ipsum dolor sit amet.'},
  {id: v1(), title: 'HTML', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo.'},
  {id: v1(), title: 'CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, inventore tempora.'}
]

export function Skills() {

  return (
    <div className={`${s.skillsBlock}`}>
      <div className={`${sContainers.container} ${s.skillsContainer}`}>
        <Title text={'Skills'}/>
        <div className={s.skills}>
          {skills.map(el => <Skill key={el.id} title={el.title} description={el.description} />)}
        </div>
      </div>
    </div>
  );
}

