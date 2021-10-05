import React from 'react';
import sContainers from '../common/styles/Container.module.css'
import sTitle from '../common/components/title/Title.module.css'
import s from './Footer.module.scss'
import {FooterContactItem} from "./FooterContactItem/FooterContactItem";

export function Footer() {
  return (
    <div className={s.footerBlock}>
      <div className={sContainers.container}>
        <p className={s.footerTitle}>2021</p>
        {/*<div className={s.contacts}>
          <FooterContactItem/>
          <FooterContactItem/>
          <FooterContactItem/>
          <FooterContactItem/>
          <FooterContactItem/>
        </div>*/}
        <p className={s.copyright}>Site created by Briws</p>
      </div>
    </div>
  );
}

