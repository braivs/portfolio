import React from 'react';
import s from './Title.module.scss'

type TitlePropsType = {
    text: string
    view?: 'main' | 'inverse'
}

export function Title(props: TitlePropsType) {
    let classNameMy = (props.view === 'inverse') ? `${s.title} ${s.titleSecondary}` : `${s.title}`;

    return (
        <div className={classNameMy}>
            <h2>{props.text}</h2>
        </div>

    );
}

