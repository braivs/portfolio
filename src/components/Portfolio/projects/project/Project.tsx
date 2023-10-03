import React from 'react'
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    link: string
    style: React.CSSProperties
}

export function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style} onClick={() => window.open(props.link, "_blank")}>
                <div className={s.viewBtn}>Watch</div>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3><br/>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    )
}

