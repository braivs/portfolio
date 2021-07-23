import React from 'react';
import s from './Project.module.scss';
import sContainers from '../../common/styles/Containers.module.css'

type ProjectPropsType = {
  title: string
  description: string
}

export function Project(props: ProjectPropsType) {
  return (
    <div className={`${sContainers.element} ${s.project}`}>
      <div className={`${s.picture} ${sContainers.flexCenter}`}>
        <span className={s.tempText}>
          Picture
        </span>
        <div className={`${s.button} ${sContainers.flexCenter}`}>
          Watch
        </div>
      </div>
      <div className={s.titleAndDescription}>
        <div>{props.title}</div>
        <div>{props.description}</div>
      </div>

    </div>
  );
}

