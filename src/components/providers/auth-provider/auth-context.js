import { createContext } from 'react'

const AuthContext = createContext({
    isAuth: false,
    username: 'The best user',
    onAuth: null,
})

export default AuthContext
