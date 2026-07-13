import { createContext } from 'react'

const AuthContext = createContext({ isAuth: false, username: 'The best user' })

export default AuthContext
