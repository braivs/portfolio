import React from 'react';
import s from './Skills.module.scss';
import sContainers from '../common/styles/Containers.module.css'
import {Skill} from "./skill/Skill";
import sTitle from "../common/styles/Title.module.css";
import {v1} from "uuid";

const skills = [
  {id: v1(), title: 'React', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, obcaecati?'},
  {id: v1(), title: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem, dolores fuga nesciunt ratione voluptates.'},
  {id: v1(), title: 'JS', description: 'Lorem ipsum dolor sit amet.'},
  {id: v1(), title: 'HTML', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo.'},
  {id: v1(), title: 'CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, inventore tempora.'}
]

export function Skills() {

  return (
    <div className={`${sContainers.block} ${s.skillsBlock}`}>
      <div className={`${sContainers.container} ${sContainers.containerColumn}`}>
        <h2 className={`${sTitle.title} ${s.title}`}>Skills</h2>
        <div className={sContainers.elements}>
          {skills.map(el => <Skill key={el.id} title={el.title} description={el.description} />)}
        </div>
      </div>
    </div>
  );
}

