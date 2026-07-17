import MainLayout from './components/layouts/main-layout/main-layout'
import RestaurantsLayout from './components/layouts/restaurants-layout/restaurants-layout'
import Header from './components/header/header'
import AuthProvider from './components/providers/auth-provider/auth-provider'
import ThemeProvider from './components/providers/theme-provider/theme-provder'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <AuthProvider>
                    <MainLayout header={<Header />} footer={'footer'}>
                        <RestaurantsLayout />
                    </MainLayout>
                </AuthProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default App
