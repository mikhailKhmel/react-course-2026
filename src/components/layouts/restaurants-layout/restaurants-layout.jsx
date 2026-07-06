import { useState } from 'react'
import RestaurantsTabs from '../../restaurants-tabs/restaurants-tabs'
import { restaurants } from '../../../mocks/mock'
import RestaurantView from '../../restaurant-view/restaurant-view'

export default function RestaurantsLayout() {
    const [restaurantId, setRestaurantId] = useState(restaurants[0].id ?? '')
    const restaurant = restaurants.find((r) => r.id === restaurantId)
    return (
        <div>
            <RestaurantsTabs
                currentRestaurant={restaurantId}
                onChange={(restaurant) => setRestaurantId(restaurant)}
            />
            <div>
                {restaurant && (
                    <RestaurantView
                        key={restaurant.id}
                        restaurant={restaurant}
                    />
                )}
            </div>
        </div>
    )
}
