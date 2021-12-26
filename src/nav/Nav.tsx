import React from 'react';
import s from './Nav.module.scss';
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Nav() {
  return (
    <div className={s.nav}>
      <AnchorLink href="#main">Main</AnchorLink>
      <AnchorLink href='#skills'>Skills</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contacts">Contacts</AnchorLink>
    </div>
  );
}

