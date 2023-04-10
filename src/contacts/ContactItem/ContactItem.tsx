import React from "react";
import s from './ContactItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

type ContactItemPropsType = {
    icon: IconProp
    href: string
    id: string
    hoverColor: string
}

export function ContactItem(props: ContactItemPropsType) {
    const StyledIconFontAwesome = styled(FontAwesomeIcon)`
      &:hover {
        color: ${props.hoverColor};
      }
    `;

    return (
        <div className={s.contactItem}>
            <a href={props.href}><StyledIconFontAwesome
                icon={props.icon} className={s.contactStyle}
            />
            </a>
        </div>


    )
}