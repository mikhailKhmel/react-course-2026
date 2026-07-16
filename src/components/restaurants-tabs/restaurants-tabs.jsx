import { useSelector } from 'react-redux'
import RestaurantTab from '../restaurant-tab/restaurant-tab'
import classes from './restaurants-tabs.module.css'
import { selectRestaurantsIds } from '../../store/features/restaurants-slice'

export default function RestaurantsTabs({ restaurantId, onChangeRestaurant }) {
    const restaurantsIds = useSelector((state) => selectRestaurantsIds(state))
    if (!restaurantsIds || restaurantsIds.length === 0)
        return <p>Данные отсутствуют</p>
    return (
        <div className={classes.tabs}>
            {restaurantsIds.map((id) => (
                <RestaurantTab
                    key={id}
                    id={id}
                    selected={restaurantId === id}
                    onChangeRestaurant={onChangeRestaurant}
                />
            ))}
        </div>
    )
}
