import React from 'react';
import s from './Main.module.scss';
import photo from '../assets/images/myPhoto.jpg'
import sContainer from '../common/styles/Containers.module.css'

export function Main() {
  return (
    <div className={s.mainBlock}>
      <div className={sContainer.container}>
        <div className={s.text}>
          <span>Hi There</span>
          <h1>I am Sergey Ustyugov aka Briws</h1>
          <p>Frontend Developer.</p>
        </div>
        <div className={s.photo}></div>
      </div>

    </div>
  );
}