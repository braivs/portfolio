import React from 'react';
import sContainers from '../common/styles/Containers.module.css'
import sTitle from '../common/styles/Title.module.css'
import s from './Projects.module.scss'
import {v1} from "uuid";
import {Project} from "./project/Project";

const projects = [
  {id: v1(), title: 'Social Network', description: 'Social network for samurais', link: 'https://brightwiths.github.io/iti_social_network/'},
  {id: v1(), title: 'Brello', description: 'Trello analog by BriWS = Brello', link: 'https://brightwiths.github.io/iti_brello'},
  {id: v1(), title: 'Counter', description: 'Counter with settings', link: 'https://brightwiths.github.io/iti_counter'}
]

export function Projects() {
  return (
    <div className={`${sContainers.block} ${s.projectsBlock}`}>
      <div className={`${sContainers.container} ${sContainers.containerColumn}`}>
        <h2 className={`${sTitle.title} ${s.title}`}>Projects</h2>
        <div className={sContainers.elements}>
          {projects.map(el => <Project key={el.id} title={el.title} description={el.description}/>)}
        </div>
      </div>
    </div>
  );
}

