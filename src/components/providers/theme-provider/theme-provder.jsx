import { useState } from 'react'
import ThemeContext, { DARK_THEME, LIGHT_THEME } from './theme-context'

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(LIGHT_THEME)

    const handleToggleTheme = () => {
        setTheme((prevState) =>
            prevState === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
        )
    }
    return (
        <ThemeContext.Provider
            value={{ theme, onToggleTheme: handleToggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
