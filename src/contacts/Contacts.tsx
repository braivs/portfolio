import React from 'react';
import s from './Contacts.module.scss'
import sContainers from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTelegram,
    faVk,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {ContactItem} from "./ContactItem/ContactItem";

const constacts = [
    {icon: 'faTelegram'},
    {icon: 'faLinkedinIn'},
    {icon: 'faGithub'},
    {icon: 'faFacebook'},
    {icon: 'faVk'},
    {icon: 'faYoutube'},
    {icon: 'faInstagram'},

]

export function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainers.container} ${s.contactContainer}`}>
                <Title text={'Contacts'} view={"inverse"}/>
                <div className={s.contacts}>
                    <form>
                        <label htmlFor='name'>What is Your Name:</label>
                        <input type={'text'} id={'name'} required/>
                        <label htmlFor='email'>Your Email Address:</label>
                        <input type={'email'} id={'email'} required/>
                        <label htmlFor='message'>How can I Help you?:</label>
                        <textarea id={'message'} required rows={4}/>
                        <button type={'submit'}>Send <span><FontAwesomeIcon icon={faArrowRight}/></span></button>
                    </form>
                    <div className={s.social}>
                        <ContactItem />
                        {/*<span><FontAwesomeIcon icon={faTelegram}/></span>
                        <span><FontAwesomeIcon icon={faLinkedinIn}/></span>
                        <span><FontAwesomeIcon icon={faGithub}/></span>
                        <span><FontAwesomeIcon icon={faFacebook}/></span>
                        <span><FontAwesomeIcon icon={faVk}/></span>
                        <span><FontAwesomeIcon icon={faYoutube}/></span>
                        <span><FontAwesomeIcon icon={faInstagram}/></span>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}