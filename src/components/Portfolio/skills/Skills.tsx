import React from 'react'
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill"
import {v1} from "uuid"
import {Title} from "../../../common/components/title/Title"
import logoReact from '../../../assets/image/logos/react_logo_icon_144942.png'
import logoRedux from '../../../assets/image/logos/redux_icon_132038.png'
import logoJS from '../../../assets/image/logos/prog-js01_icon-icons.png'
import logoTS from '../../../assets/image/logos/icons8-typescript-100.png'
import logoHTML from '../../../assets/image/logos/social_html5_html_71.png'
import logoCSS from '../../../assets/image/logos/css3-01_icon-icons.png'
import sass from '../../../assets/image/logos/sass.png'
import axios from '../../../assets/image/logos/axios.jpg'
import jest from '../../../assets/image/logos/jest.png'
import storyBook from '../../../assets/image/logos/storybook.png'
import formik from '../../../assets/image/logos/formik.png'
import materialUI from '../../../assets/image/logos/material_ui.png'
import git from '../../../assets/image/logos/Git.png'
import postman from '../../../assets/image/logos/postman.png'
import styled from '../../../assets/image/logos/styled-components.png'
import firebase from '../../../assets/image/logos/firebase.png'
import web3 from '../../../assets/image/logos/web3.png'
import {Fade} from "react-awesome-reveal"


const skills = [
    {id: v1(), title: 'React', logo: logoReact,},
    {id: v1(), title: 'Redux', logo: logoRedux,},
    {id: v1(), title: 'TypeScript', logo: logoTS},
    {id: v1(), title: 'JavaScript', logo: logoJS},
    {id: v1(), title: 'Firebase', logo: firebase},
    {id: v1(), title: 'REST API / AXIOS', logo: axios,},
    {id: v1(), title: 'Unit Tests', logo: jest,},
    {id: v1(), title: 'Storybook', logo: storyBook,},
    {id: v1(), title: 'Formik', logo: formik,},
    {id: v1(), title: 'Material-UI', logo: materialUI,},
    {id: v1(), title: 'Git', logo: git,},
    {id: v1(), title: 'Postman', logo: postman,},
    {id: v1(), title: 'HTML', logo: logoHTML,},
    {id: v1(), title: 'CSS', logo: logoCSS,},
    {id: v1(), title: 'SASS', logo: sass,},
    {id: v1(), title: 'Styled Components', logo: styled,},
    {id: v1(), title: 'Web3', logo: web3}
]

export function Skills() {

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <Fade>
                <div className={s.skillsContainer}>
                    <Title text={'Skills'}/>
                    <div className={s.skills}>
                        {skills.map(el => <Skill key={el.id} title={el.title} logo={el.logo}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    )
}

