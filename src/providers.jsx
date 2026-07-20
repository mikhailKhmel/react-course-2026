import { Provider } from 'react-redux'
import ThemeProvider from './components/providers/theme-provider/theme-provder'
import AuthProvider from './components/providers/auth-provider/auth-provider'
import store from './store/store'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <AuthProvider>{children}</AuthProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default Providers
