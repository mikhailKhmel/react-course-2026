import { createContext } from 'react'

export const LIGHT_THEME = 'light'
export const DARK_THEME = 'dark'
const ThemeContext = createContext({ theme: LIGHT_THEME, onToggleTheme: null })

export default ThemeContext
