import React, {useEffect, useState} from 'react'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import s from './ScrollToTop.module.scss'

const SCROLL_THRESHOLD = 400

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > SCROLL_THRESHOLD)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, {passive: true})

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <button
            type="button"
            className={`${s.scrollToTop} ${isVisible ? s.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <FontAwesomeIcon icon={faAngleUp}/>
        </button>
    )
}
