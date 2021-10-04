import React from 'react';
import s from './Main.module.scss';
import photo from '../assets/image/myPhotoBW.jpg'
import sContainer from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <h1>HI, I`M REACT DEVELOPER</h1>
                    <h2>BRIWS USTYUGOV</h2>
                    <p>aka Sergey</p>
                </div>
                <img src={photo} alt="myPhoto"/>
            </div>
        </div>
    );
}