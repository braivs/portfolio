import React from 'react';
import s from './Contacts.module.scss'
import sContainers from "../common/styles/Containers.module.css";
import sTitle from '../common/styles/Title.module.css'

export function Contacts() {
  return (
    <div className={`${sContainers.block} ${s.contactsBlock}`}>
      <div className={`${sContainers.container} ${sContainers.containerColumn}`}>
        <h2 className={sTitle.title}>Contacts</h2>
        <form>
          <div><input/></div>
          <div><input/></div>
          <div><textarea /></div>
        </form>
        <button className={s.button}>Send</button>

      </div>
    </div>
  );
}