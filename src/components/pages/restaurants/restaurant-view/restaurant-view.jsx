import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../../../store/features/restaurants-slice'
import { useContext } from 'react'
import classes from './restaurant-view.module.css'
import { NavLink, Outlet, useParams } from 'react-router'
import classNames from 'classnames'
import ThemeContext, {
    DARK_THEME,
} from '../../../providers/theme-provider/theme-context'

export default function RestaurantView() {
    const { restaurantId } = useParams()
    const { theme } = useContext(ThemeContext)

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    )

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <div className={classes.tabs}>
                <NavLink
                    to='menu'
                    className={({ isActive }) =>
                        classNames(classes.tab, {
                            [classes.dark]: theme === DARK_THEME,
                            [classes.selected]: isActive,
                        })
                    }
                >
                    Меню
                </NavLink>
                <NavLink
                    to='reviews'
                    className={({ isActive }) =>
                        classNames(classes.tab, {
                            [classes.dark]: theme === DARK_THEME,
                            [classes.selected]: isActive,
                        })
                    }
                >
                    Отзывы
                </NavLink>
            </div>
            <Outlet />
        </div>
    )
}
