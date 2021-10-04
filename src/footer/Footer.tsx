import React from 'react';
import sContainers from '../common/styles/Container.module.css'
import sTitle from '../common/components/title/Title.module.css'
import s from './Footer.module.scss'
import {FooterContactItem} from "./FooterContactItem/FooterContactItem";

export function Footer() {
  return (
    <div className={s.footerBlock}>
      <div className={`${sContainers.container} ${sContainers.containerColumn}`}>
        <h2 className={`${sTitle.title} ${s.footerTitle}`}>Sergey Ustyugov</h2>
        <div className={s.contacts}>
          <FooterContactItem/>
          <FooterContactItem/>
          <FooterContactItem/>
          <FooterContactItem/>
          <FooterContactItem/>
        </div>
        <p className={s.copyright}>© 2021 Site created by Briws</p>
      </div>
    </div>
  );
}

