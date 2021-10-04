import React from 'react';
import sContainers from '../common/styles/Container.module.css'
import s from './Projects.module.scss'
import {v1} from "uuid";
import {Project} from "./project/Project";
import {Title} from "../common/components/title/Title";
import todoImage from './../assets/image/todolist.jpg'
import socialImage from './../assets/image/social-network.jpg'
import counterImage from './../assets/image/counter.jpg'

const social = {
    backgroundImage: `url(${socialImage})`,
}
const counter = {
    backgroundImage: `url(${counterImage})`,
}
const todolist = {
    backgroundImage: `url(${todoImage})`,
}


const projects = [
    {
        id: v1(),
        title: 'Social Network',
        description: 'Social network for samurais. Social network for samurais. Social network for samurais. Social network for samurais.',
        link: 'https://brightwiths.github.io/iti_social_network/',
        img: social
    },
    {
        id: v1(),
        title: 'Brello',
        description: 'Trello analog by BriWS = Brello. Trello analog by BriWS = Brello. Trello analog by BriWS = Brello. Trello analog by BriWS = Brello. Trello analog by BriWS = Brello. Trello analog by BriWS = Brello. Trello analog by BriWS.',
        link: 'https://brightwiths.github.io/iti_brello',
        img: todolist

    },
    {
        id: v1(),
        title: 'Counter',
        description: 'Counter with settings. Counter with settings. Counter with settings. Counter with settings. Counter with settings. Counter with settings.',
        link: 'https://brightwiths.github.io/iti_counter',
        img: counter
    }
]

export function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainers.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    {projects.map(el => <Project key={el.id} style={el.img} title={el.title}
                                                 description={el.description} link={el.link}/>)}
                </div>
            </div>
        </div>

    );
}

