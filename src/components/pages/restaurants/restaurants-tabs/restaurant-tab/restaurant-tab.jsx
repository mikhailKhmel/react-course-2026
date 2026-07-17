import classNames from 'classnames'
import classes from './restaurant-tab.module.css'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import ThemeContext, {
    DARK_THEME,
} from '../../../../providers/theme-provider/theme-context'
import { selectRestaurantById } from '../../../../../store/features/restaurants-slice'

export default function RestaurantTab({ id }) {
    const restaurant = useSelector((state) => selectRestaurantById(state, id))
    const { theme } = useContext(ThemeContext)

    return (
        <NavLink
            to={`/restaurants/${id}`}
            className={({ isActive }) =>
                classNames(classes.tab, {
                    [classes.dark]: theme === DARK_THEME,
                    [classes.selected]: isActive,
                })
            }
        >
            {restaurant.name}
        </NavLink>
    )
}
