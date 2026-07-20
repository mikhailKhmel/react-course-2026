import classNames from 'classnames'
import classes from './header.module.css'
import AuthButton from './auth-button/auth-button'
import ThemeButton from './theme-button/theme-button'
import CustomNavLink from '@/components/common/custom-navlink/custom-navlink'

const Header = () => {
    return (
        <div className={classNames(classes.container)}>
            <nav className={classes.nav}>
                <CustomNavLink to='/'>
                    <h3>Ресторанные отзывы</h3>
                </CustomNavLink>
                <CustomNavLink to='/restaurants'>
                    Список ресторанов
                </CustomNavLink>
            </nav>

            <div className={classes.actions}>
                <AuthButton />
                <ThemeButton />
            </div>
        </div>
    )
}

export default Header
