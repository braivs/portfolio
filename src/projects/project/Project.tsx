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
      <div className={s.picture}>
        <span className={s.tempText}>
          Picture
        </span>
        <button className={s.button}>
          Watch
        </button>
      </div>
      <div className={s.titleAndDescription}>
        <div className={s.title}>{props.title}</div><br/>
        <div className={s.description}>{props.description}</div>
      </div>

    </div>
  );
}

