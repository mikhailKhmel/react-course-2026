import classNames from 'classnames'
import { NavLink } from 'react-router'
import { useContext } from 'react'
import classes from './navlink-tab.module.css'
import ThemeContext, {
    DARK_THEME,
} from '@/components/providers/theme-provider/theme-context'

const NavLinkTab = ({ to, children }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(classes.tab, {
                    [classes.dark]: theme === DARK_THEME,
                    [classes.selected]: isActive,
                })
            }
        >
            {children}
        </NavLink>
    )
}

export default NavLinkTab
