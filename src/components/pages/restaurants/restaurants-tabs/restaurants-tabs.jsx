import { useSelector } from 'react-redux'
import classes from './restaurants-tabs.module.css'
import { selectRestaurantsIds } from '../../../../store/features/restaurants-slice'
import RestaurantTab from './restaurant-tab/restaurant-tab'

export default function RestaurantsTabs() {
    const restaurantsIds = useSelector(selectRestaurantsIds)
    if (!restaurantsIds || restaurantsIds.length === 0)
        return <p>Данные отсутствуют</p>
    return (
        <div className={classes.tabs}>
            {restaurantsIds.map((id) => (
                <RestaurantTab key={id} id={id} />
            ))}
        </div>
    )
}
