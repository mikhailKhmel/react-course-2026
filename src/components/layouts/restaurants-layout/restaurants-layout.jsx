import RestaurantsTabs from '../../restaurants-tabs/restaurants-tabs'
import RestaurantView from '../../restaurant-view/restaurant-view'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurantsIds } from '../../../store/features/restaurants-slice'

export default function RestaurantsLayout() {
    const restaurants = useSelector(selectRestaurantsIds)
    const [restaurantId, setRestaurantId] = useState(restaurants[0])

    return (
        <div>
            <RestaurantsTabs
                restaurantId={restaurantId}
                onChangeRestaurant={(id) => setRestaurantId(id)}
            />
            <div>
                {restaurantId ? (
                    <RestaurantView key={restaurantId} id={restaurantId} />
                ) : (
                    <p>Ресторан не выбран</p>
                )}
            </div>
        </div>
    )
}
