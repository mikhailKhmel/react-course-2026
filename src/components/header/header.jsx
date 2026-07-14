import classNames from 'classnames'
import classes from './header.module.css'
import ThemeButton from '../theme-button/theme-button'
import AuthButton from '../auth-button/auth-button'

const Header = () => {
    return (
        <div className={classNames(classes.container)}>
            <h1>Ресторанные отзывы</h1>
            <div className={classes.actions}>
                <AuthButton />
                <ThemeButton />
            </div>
        </div>
    )
}

export default Header
