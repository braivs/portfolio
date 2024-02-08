import React from 'react'
import s from './Project.module.scss'
import {Button} from "../../../../common/components/Button/Button"

export function Project(props: ProjectProps) {
    return (
        <div className={s.project}>
            <div className={s.buttonContainer} style={props.style}>
                <div className={s.image} onClick={() => window.open(props.link, "_blank")}>
                    <Button title={'Watch'}/>
                </div>
                {props.presentationLink && <div onClick={() => window.open(props.presentationLink, "_blank")}>
                    <Button title={'Presentation'} className={s.secondButton}/>
                </div> }
            </div>

            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3><br/>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    )
}

export type ProjectProps = {
    title: string
    description: string
    link: string
    style: React.CSSProperties
    presentationLink?: string
}

