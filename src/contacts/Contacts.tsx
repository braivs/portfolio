import React from 'react';
import s from './Contacts.module.scss'
import sContainers from "../common/styles/Containers.module.css";
import sTitle from '../common/components/title/Title.module.css'

export function Contacts() {
  return (
    <div className={s.contactsBlock}>
      <div className={`${sContainers.container} ${sContainers.containerColumn}`}>
        <h2 className={`${sTitle.title} ${s.contactsTitle}`}>Contacts</h2>
        <form>
          <input type={'text'}/>
          <input type={'text'}/>
          <textarea />
        </form>
        <button type={'submit'} className={s.button}>Send</button>

      </div>
    </div>
  );
}