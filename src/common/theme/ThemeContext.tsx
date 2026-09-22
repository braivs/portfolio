import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react'

export type Theme = 'light' | 'dark'

type ThemeContextValue = {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const getInitialTheme = (): Theme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light')
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
