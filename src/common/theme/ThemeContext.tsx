import React, {createContext, ReactNode, useContext, useLayoutEffect, useState} from 'react'

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const THEME_STORAGE_KEY = 'theme'

const getInitialTheme = (): Theme => {
    const savedTheme = sessionStorage.getItem(THEME_STORAGE_KEY)

    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    // Apply the theme before paint to prevent a flash of the wrong theme.
    useLayoutEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'

        sessionStorage.setItem(THEME_STORAGE_KEY, nextTheme)
        setTheme(nextTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }

    return context
}
