import React from 'react'
import clsx from 'clsx'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import s from './ScrollButton.module.scss'

type Props = {
    onClick: () => void
    direction: 'left' | 'right'
    className?: string
}

export const ScrollButton = ({onClick, direction, className}: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={clsx(s.scrollButton, className)}
            aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
        >
            <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight}/>
        </button>
    )
}
