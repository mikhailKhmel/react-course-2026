import classNames from 'classnames'
import classes from './restaurant-tab.module.css'
import { useContext } from 'react'
import ThemeContext, {
    DARK_THEME,
} from '../providers/theme-provider/theme-context'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeRestuarantTab,
    selectCurrentRestaurantId,
    selectRestaurantById,
} from '../../store/features/restaurants-slice'

export default function RestaurantTab({ id }) {
    const dispatch = useDispatch()
    const currentRestaurant = useSelector((state) =>
        selectCurrentRestaurantId(state),
    )
    const restaurant = useSelector((state) => selectRestaurantById(state, id))
    const { theme } = useContext(ThemeContext)
    return (
        <div
            className={classNames(classes.tab, {
                [classes.dark]: theme === DARK_THEME,
                [classes.selected]: currentRestaurant === id,
            })}
            onClick={() => dispatch(changeRestuarantTab(id))}
        >
            {restaurant.name}
        </div>
    )
}
