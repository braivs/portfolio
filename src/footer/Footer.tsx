import React from 'react';
import sContainers from '../common/styles/Container.module.scss'
import s from './Footer.module.scss'

export function Footer() {
  return (
    <div className={s.footerBlock}>
      <div className={`${sContainers.container} ${s.footerContainer}`}>
        <p>Site created by Briws. 2021.</p>
      </div>
    </div>
  );
}

