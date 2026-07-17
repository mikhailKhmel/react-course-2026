import classNames from 'classnames'
import classes from './header.module.css'
import AuthButton from './auth-button/auth-button'
import { NavLink } from 'react-router'
import ThemeButton from './theme-button/theme-button'

const Header = () => {
    return (
        <div className={classNames(classes.container)}>
            <nav className={classes.nav}>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? classes.active : classes.navlink
                    }
                >
                    <h3>Ресторанные отзывы</h3>
                </NavLink>
                <NavLink
                    to='/restaurants'
                    className={({ isActive }) =>
                        isActive ? classes.active : classes.navlink
                    }
                >
                    Список ресторанов
                </NavLink>
            </nav>

            <div className={classes.actions}>
                <AuthButton />
                <ThemeButton />
            </div>
        </div>
    )
}

export default Header
