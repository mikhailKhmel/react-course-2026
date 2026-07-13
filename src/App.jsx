import { useState } from 'react'
import MainLayout from './components/layouts/main-layout/main-layout'
import RestaurantsLayout from './components/layouts/restaurants-layout/restaurants-layout'
import ThemeContext from './components/contexts/theme-context'
import Header from './components/header/header'
import AuthContext from './components/contexts/auth-context'

export const LIGHT_THEME = 'light'
export const DARK_THEME = 'dark'

function App() {
    const [theme, setTheme] = useState(LIGHT_THEME)
    const [isAuth, setIsAuth] = useState(false)

    const handleToggleTheme = () => {
        setTheme((prevState) =>
            prevState === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
        )
    }

    const handleAuth = () => {
        setIsAuth((prevState) => !prevState)
    }
    return (
        <ThemeContext.Provider value={theme}>
            <AuthContext.Provider value={{ isAuth, username: 'The best user' }}>
                <MainLayout
                    header={
                        <Header
                            onToggleTheme={handleToggleTheme}
                            onAuth={handleAuth}
                        />
                    }
                    footer={'footer'}
                >
                    <RestaurantsLayout />
                </MainLayout>
            </AuthContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App
