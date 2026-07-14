import { useState } from 'react'
import AuthContext from './auth-context'

const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const handleAuth = () => {
        setIsAuth((prevState) => !prevState)
    }
    return (
        <AuthContext.Provider
            value={{ isAuth, username: 'the best user', onAuth: handleAuth }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
