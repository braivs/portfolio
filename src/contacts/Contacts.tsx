import React from 'react';
import s from './Contacts.module.scss'
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
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {ContactItem} from "./ContactItem/ContactItem";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {v1} from "uuid";
import {useFormik} from "formik";
import emailjs from 'emailjs-com';
import {Fade} from "react-awesome-reveal";


type constactsType = Array<{
    id: string
    icon: IconProp
    href: string
    hoverColor: string
}>

//todo: need to pass hoverColor to Contacts
const constacts: constactsType = [
    {id: v1(), icon: faTelegram, href: 'https://t.me/brightwithsme', hoverColor: '#23a9ea'},
    {id: v1(), icon: faLinkedinIn, href: 'https://www.linkedin.com/in/briws/', hoverColor: '#0E76A8'},
    {id: v1(), icon: faGithub, href: 'https://github.com/brightwiths', hoverColor: '#333333'},
    {id: v1(), icon: faFacebook, href: 'https://www.facebook.com/brightwiths', hoverColor: '#3B5998'},
    {id: v1(), icon: faVk, href: 'https://vk.com/brightwiths', hoverColor: '#2B587A'},
    {id: v1(), icon: faYoutube, href: 'https://www.youtube.com/channel/UChsgjWWbhYzEfma5LwgVlPQ', hoverColor: '#C4302B'},
    {id: v1(), icon: faInstagram, href: 'https://www.instagram.com/brightwiths/', hoverColor: '#3F729B'}
]

export function Contacts() {
    type FormikErrorType = {
        user_name?: string
        user_email?: string
        message?: string
    }

    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.user_name) {
                errors.user_name = 'Required';
            }
            if (!values.user_email) {
                errors.user_email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
                errors.user_email = 'Invalid email address';
            }

            if (!values.message) {
                errors.message = 'Required';
            } else if (values.message.length < 100) {
                errors.message = 'Must be 100 characters or longer';
            }

            return errors;
        },

        onSubmit: values => {
            SendEmail(values)
            formik.resetForm();
        },
    })

    function SendEmail(object: { user_name: string, user_email: string, message: string }) {
        emailjs.send("gmail", "contact_form", object, "user_iVELjxR7TwQRSAYW1Jeft")
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <Fade>
            <div className={s.contactContainer}>
                <Title text={'Contacts'} view={"inverse"}/>
                <div className={s.contacts}>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor='user_name'>What is Your Name:</label>
                        <input
                            type={'text'}
                            id={'user_name'}
                            {...formik.getFieldProps('user_name')}
                        />
                        {formik.touched.user_name && formik.errors.user_name
                            ? <div style={{color: 'red'}}>{formik.errors.user_name}</div>
                            : null}
                        <label htmlFor='user_email'>Your Email Address:</label>
                        <input
                            type={'text'}
                            id={'user_email'}
                            {...formik.getFieldProps('user_email')}
                        />
                        {formik.touched.user_email && formik.errors.user_email
                            ? <div style={{color: 'red'}}>{formik.errors.user_email}</div>
                            : null}
                        <label htmlFor='message'>How can I Help you?:</label>
                        <textarea
                            id={'message'}
                            rows={4}
                            {...formik.getFieldProps('message')}
                        />
                        {formik.touched.message && formik.errors.message
                            ? <div style={{color: 'red'}}>{formik.errors.message}</div>
                            : null}
                        <button type={'submit'}>Send <span><FontAwesomeIcon icon={faArrowRight}/></span></button>
                    </form>
                    <div className={s.social}>
                        {constacts.map(el => <ContactItem
                            key={el.id}
                            icon={el.icon}
                            id={el.id}
                            href={el.href}
                            hoverColor={el.hoverColor}
                        />)}
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
}