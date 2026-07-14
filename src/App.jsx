import MainLayout from './components/layouts/main-layout/main-layout'
import RestaurantsLayout from './components/layouts/restaurants-layout/restaurants-layout'
import Header from './components/header/header'
import AuthProvider from './components/providers/auth-provider/auth-provider'
import ThemeProvider from './components/providers/theme-provider/theme-provder'

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <MainLayout header={<Header />} footer={'footer'}>
                    <RestaurantsLayout />
                </MainLayout>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
