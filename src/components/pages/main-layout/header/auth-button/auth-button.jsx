import { useContext } from 'react'
import classes from './auth-button.module.css'
import AuthContext from '../../../../providers/auth-provider/auth-context'

const AuthButton = () => {
    const { isAuth, username, onAuth } = useContext(AuthContext)

    return (
        <button onClick={onAuth}>
            <p className={classes.username}>{isAuth ? username : ''}</p>{' '}
            {isAuth ? 'Выйти' : 'Войти'}
        </button>
    )
}
export default AuthButton
