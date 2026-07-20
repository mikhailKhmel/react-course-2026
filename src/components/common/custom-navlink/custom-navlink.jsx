import { NavLink } from 'react-router'
import classes from './custom-navlink.module.css'

const CustomNavLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? classes.active : classes.navlink
            }
        >
            {children}
        </NavLink>
    )
}

export default CustomNavLink
