import React from 'react';
import s from './Contacts.module.scss'
import sContainers from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTelegram,
    faVk,
    faYoutube, IconDefinition
} from "@fortawesome/free-brands-svg-icons";
import {ContactItem} from "./ContactItem/ContactItem";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {v1} from "uuid";
import socialImage from "../assets/image/social-network.jpg";
import {useFormik} from "formik";


type constactsType = Array<{
    id: string
    icon: IconProp
    href: string
    hoverColor: string
}>

const constacts: constactsType = [
    {id: v1(), icon: faTelegram, href: 'https://t.me/brightwiths', hoverColor: '#23a9ea'},
    {id: v1(), icon: faLinkedinIn, href: 'https://www.linkedin.com/in/briws/', hoverColor: ''},
    {id: v1(), icon: faGithub, href: 'https://github.com/brightwiths', hoverColor: ''},
    {id: v1(), icon: faFacebook, href: 'https://www.facebook.com/brightwiths', hoverColor: ''},
    {id: v1(), icon: faVk, href: 'https://vk.com/brightwiths', hoverColor: ''},
    {id: v1(), icon: faYoutube, href: 'https://www.youtube.com/channel/UChsgjWWbhYzEfma5LwgVlPQ', hoverColor: ''},
    {id: v1(), icon: faInstagram, href: 'https://www.instagram.com/brightwiths/', hoverColor: ''}
]

//todo: как прокинуть стиль с hover?
/*const hoverTelegramColor = {
    "&:hover": {
        color: `url(${constacts[0].hoverColor})`,
    }
}*/

// const myIcon = faTelegram as IconProp


export function Contacts() {
    type FormikErrorType = {
        name?: string
        email?: string
        message?: string
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = 'Required';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length < 100) {
                errors.message = 'Must be 100 characters or longer';
            }

            return errors;
        },

        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm();
        },
    })
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainers.container} ${s.contactContainer}`}>
                <Title text={'Contacts'} view={"inverse"}/>
                <div className={s.contacts}>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor='name'>What is Your Name:</label>
                        <input
                            type={'text'}
                            id={'name'}
                            {...formik.getFieldProps('name')}
                        />
                        {formik.errors.name ? <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                        <label htmlFor='email'>Your Email Address:</label>
                        <input
                            type={'text'}
                            id={'email'}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                        <label htmlFor='message'>How can I Help you?:</label>
                        <textarea
                            id={'message'}
                            rows={4}
                            {...formik.getFieldProps('message')}
                        />
                        {formik.errors.message ? <div style={{color: 'red'}}>{formik.errors.message}</div> : null}
                        <button type={'submit'}>Send <span><FontAwesomeIcon icon={faArrowRight}/></span></button>
                    </form>
                    <div className={s.social}>
                        {constacts.map(el => <ContactItem icon={el.icon} href={el.href}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}