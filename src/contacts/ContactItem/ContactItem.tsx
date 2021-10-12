import React from "react";
import s from './ContactItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type ContactItemPropsType = {
    icon: IconProp
    href: string
    id: string
    style?: React.CSSProperties
}

export function ContactItem(props: ContactItemPropsType) {
    return (
        <span className={s.contactItem}>
            <a href={props.href}><FontAwesomeIcon
                icon={props.icon} className={s.contactStyle}
            />
            </a>
        </span>


    )
}