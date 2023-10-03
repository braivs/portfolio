import React from 'react';
import s from './Footer.module.scss'

export function Footer() {
  return (
    <div className={s.footerBlock}>
      <div className={s.footerContainer}>
        <p>Site created by Braivs. 2023.</p>
      </div>
    </div>
  );
}

