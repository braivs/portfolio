import React from "react";
import s from './ContactItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type ContactItemPropsType = {
    icon: IconProp
    href: string
    id: string
    style?: React.CSSProperties
    colorId:string
    setColorId: any
}

export function ContactItem(props: ContactItemPropsType) {
    debugger
    return (
        <span className={s.contactItem}
              onMouseEnter={() => props.setColorId(props.id)}
              onMouseLeave={() => props.setColorId('')}
        >
            <a href={props.href}><FontAwesomeIcon
                icon={props.icon} className={s.contactStyle}
                style={props.colorId === props.id ? { color: `#23a9ea`}: { color: `red`} }/>
            </a>
        </span>
    )
}