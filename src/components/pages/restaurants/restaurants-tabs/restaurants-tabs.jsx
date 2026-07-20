import { useSelector } from 'react-redux'
import classes from './restaurants-tabs.module.css'
import RestaurantTab from './restaurant-tab/restaurant-tab'
import { selectRestaurantsIds } from '@/store/features/restaurants-slice'

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
