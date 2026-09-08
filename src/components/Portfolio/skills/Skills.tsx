import React from 'react'
import s from './Skills.module.scss'
import {Skill} from "./skill/Skill"
import BrightCarousel from '../../../common/components/BrightCarousel/BrightCarousel'
import {v1} from "uuid"
import {Title} from "../../../common/components/title/Title"
import logoReact from '../../../assets/image/logosColor/react.png'
import logoRedux from '../../../assets/image/logosColor/redux.svg'
import NodeJSExpress from '../../../assets/image/logosColor/NodeJSExpress.png'
import logoJS from '../../../assets/image/logosColor/javascript.svg'
import logoTS from '../../../assets/image/logosColor/typescript.svg'
import logoHTML from '../../../assets/image/logosColor/html.svg'
import logoCSS from '../../../assets/image/logosColor/css_notext.svg'
import sass from '../../../assets/image/logosColor/sass.svg'
import axios from '../../../assets/image/logosColor/Axios.svg'
import jest from '../../../assets/image/logosColor/jest.svg'
import storyBook from '../../../assets/image/logosColor/storybook.svg'
import formik from '../../../assets/image/logosColor/formik.svg'
import reactHookForm from '../../../assets/image/logosColor/react-hook-form.png'
import materialUI from '../../../assets/image/logosColor/MUI.svg'
import git from '../../../assets/image/logosColor/git.svg'
import postman from '../../../assets/image/logosColor/postman.svg'
import styled from '../../../assets/image/logosColor/styled-components_no text.png'
import pixijs from '../../../assets/image/logosColor/pixijs.svg'
import iGaming from '../../../assets/image/logosColor/iGaming_512.png'
import firebase from '../../../assets/image/logosColor/firebase.svg'
import web3 from '../../../assets/image/logosColor/web-3.svg'
import nextJS from '../../../assets/image/logosColor/nextjs-round.png'
import docker from '../../../assets/image/logosColor/docker.svg'
import cplusplus from '../../../assets/image/logosColor/cplusplus.svg'
import dotnet from '../../../assets/image/logosColor/dotnet.svg'
import githubcopilot from '../../../assets/image/logosColor/github-copilot.svg'
import cursor from '../../../assets/image/logosColor/cursor.svg'
import reown from '../../../assets/image/logosColor/reown.webp'
import metamask from '../../../assets/image/logosColor/metamask.svg'
import websocket from '../../../assets/image/logosColor/websocket.svg'
import radixui from '../../../assets/image/logosColor/radix-ui.svg'
import restapi from '../../../assets/image/logosColor/rest-api.png'
import jira from '../../../assets/image/logosColor/jira.svg'
import csharp from '../../../assets/image/logosColor/csharp.webp'
import webstorm from '../../../assets/image/logosColor/WebStorm.svg'
import figma from '../../../assets/image/logosColor/figma.svg'
import {Fade} from "react-awesome-reveal"


const skills = [
    {id: v1(), title: 'TypeScript', logo: logoTS},
    {id: v1(), title: 'React', logo: logoReact},
    {id: v1(), title: 'Redux Toolkit', logo: logoRedux},
    {id: v1(), title: 'Next.js', logo: nextJS},
    {id: v1(), title: 'Node.js (Express)', logo: NodeJSExpress},
    {id: v1(), title: 'PixiJS', logo: pixijs},
    {id: v1(), title: 'Web3', logo: web3},
    {id: v1(), title: 'iGaming', logo: iGaming},
    {id: v1(), title: 'JavaScript', logo: logoJS},
    {id: v1(), title: 'REST API', logo: restapi},
    {id: v1(), title: 'RTK Query', logo: logoRedux},
    {id: v1(), title: 'WebSockets', logo: websocket},
    {id: v1(), title: 'Axios', logo: axios},
    {id: v1(), title: 'Reown', logo: reown},
    {id: v1(), title: 'MetaMask', logo: metamask},
    {id: v1(), title: 'HTML5', logo: logoHTML},
    {id: v1(), title: 'SCSS', logo: sass},
    {id: v1(), title: 'CSS', logo: logoCSS},
    {id: v1(), title: 'Styled Components', logo: styled},
    {id: v1(), title: 'MUI', logo: materialUI},
    {id: v1(), title: 'Radix UI', logo: radixui},
    {id: v1(), title: 'Formik', logo: formik},
    {id: v1(), title: 'React Hook Form', logo: reactHookForm},
    {id: v1(), title: 'Firebase', logo: firebase},
    {id: v1(), title: 'Unit Tests (Jest)', logo: jest},
    {id: v1(), title: 'C#', logo: csharp},
    {id: v1(), title: 'C++', logo: cplusplus},
    {id: v1(), title: '.NET', logo: dotnet},
]

const tools = [
    {id: v1(), title: 'Git', logo: git},
    {id: v1(), title: 'Docker', logo: docker},
    {id: v1(), title: 'Postman', logo: postman},
    {id: v1(), title: 'Storybook', logo: storyBook},
    {id: v1(), title: 'Jira', logo: jira},
    {id: v1(), title: 'WebStorm', logo: webstorm},
    {id: v1(), title: 'Cursor', logo: cursor},
    {id: v1(), title: 'GitHub Copilot', logo: githubcopilot},
    {id: v1(), title: 'Figma', logo: figma},
]

const skillsSmooth = {active: true, direction: 'right' as const}
const toolsSmooth = {active: true, direction: 'left' as const}
const carouselSpeed = 1

export function Skills() {
    return (
        <div className={s.skillsBlock} id={'skills'}>
            <Fade>
                <div className={s.skillsInner}>
                    <div className={s.section}>
                        <div className={s.titleWrap}>
                            <Title text={'Skills'}/>
                        </div>
                        <div className={s.carouselWrap}>
                            <BrightCarousel
                                elements={skills.map(el => <Skill key={el.id} title={el.title} logo={el.logo}/>)}
                                className={s.carousel}
                                // full-width track; arrows stay on the 80% column edges, not in flow
                                floatingControls
                                interval={carouselSpeed}
                                smooth={skillsSmooth}
                            />
                        </div>
                    </div>
                    <div className={s.section}>
                        <div className={s.titleWrap}>
                            <Title text={'Tools'}/>
                        </div>
                        <div className={s.carouselWrap}>
                            <BrightCarousel
                                elements={tools.map(el => <Skill key={el.id} title={el.title} logo={el.logo}/>)}
                                className={s.carousel}
                                // full-width track; arrows stay on the 80% column edges, not in flow
                                floatingControls
                                interval={carouselSpeed}
                                smooth={toolsSmooth}
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

