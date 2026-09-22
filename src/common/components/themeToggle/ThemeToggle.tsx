import React from 'react'
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import s from './ThemeToggle.module.scss'
import {useTheme} from '../../theme/ThemeContext'

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme()
    const isDark = theme === 'dark'

    const label = `Switch to ${isDark ? 'light' : 'dark'} theme`

    return (
        <button
            type="button"
            className={s.themeToggle}
            onClick={toggleTheme}
            aria-label={label}
            title={label}
            aria-pressed={isDark}
        >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon}/>
        </button>
    )
}
