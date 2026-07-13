import classNames from 'classnames'
import classes from './header.module.css'
import { useContext } from 'react'
import AuthContext from '../contexts/auth-context'

const Header = ({ onToggleTheme, onAuth }) => {
    const { isAuth, username } = useContext(AuthContext)
    return (
        <div className={classNames(classes.container)}>
            <h1>Ресторанные отзывы</h1>
            <div className={classes.actions}>
                <button onClick={onToggleTheme}>Сменить тему</button>
                <button onClick={onAuth}>
                    <p className={classes.username}>{isAuth ? username : ''}</p>{' '}
                    {isAuth ? 'Выйти' : 'Войти'}
                </button>
            </div>
        </div>
    )
}

export default Header
