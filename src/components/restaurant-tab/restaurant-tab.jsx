import classNames from 'classnames'
import classes from './restaurant-tab.module.css'
import { useContext } from 'react'
import ThemeContext, {
    DARK_THEME,
} from '../providers/theme-provider/theme-context'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../store/features/restaurants-slice'

export default function RestaurantTab({ id, selected, onChangeRestaurant }) {
    const restaurant = useSelector((state) => selectRestaurantById(state, id))
    const { theme } = useContext(ThemeContext)
    return (
        <div
            className={classNames(classes.tab, {
                [classes.dark]: theme === DARK_THEME,
                [classes.selected]: selected,
            })}
            onClick={() => onChangeRestaurant(id)}
        >
            {restaurant.name}
        </div>
    )
}
