import React from 'react';
import s from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {v1} from "uuid";
import {Title} from "../common/components/title/Title";
import logoReact from '../assets/image/logos/react_logo_icon_144942.png'
import logoRedux from '../assets/image/logos/redux_icon_132038.png'
import logoJS from '../assets/image/logos/prog-js01_icon-icons.png'
import logoTS from '../assets/image/logos/icons8-typescript-100.png'
import logoHTML from '../assets/image/logos/social_html5_html_71.png'
import logoCSS from '../assets/image/logos/css3-01_icon-icons.png'
import {Fade} from "react-awesome-reveal";


const skills = [
    {
        id: v1(),
        title: 'React',
        logo: logoReact,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, obcaecati?'
    },
    {
        id: v1(),
        title: 'Redux',
        logo: logoRedux,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem, dolores fuga nesciunt ratione voluptates.'
    },
    {id: v1(), title: 'JS', logo: logoJS, description: 'Lorem ipsum dolor sit amet.'},
    {id: v1(), title: 'TS', logo: logoTS, description: 'Lorem ipsum dolor sit amet.'},
    {
        id: v1(),
        title: 'HTML',
        logo: logoHTML,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo.'
    },
    {
        id: v1(),
        title: 'CSS',
        logo: logoCSS,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, inventore tempora.'
    }
]

export function Skills() {

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <Fade direction={"left"}>
                <div className={s.skillsContainer}>
                    <Title text={'Skills'}/>
                    <div className={s.skills}>
                        {skills.map(el => <Skill key={el.id} title={el.title} logo={el.logo}
                                                 description={el.description}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

