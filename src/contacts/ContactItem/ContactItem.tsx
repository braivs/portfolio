import React from "react";
import s from './ContactItem.module.css'
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function ContactItem() {
    return (
        <div className={s.contactItem}>
            <FontAwesomeIcon icon={faTelegram}/>
        </div>
    )
}