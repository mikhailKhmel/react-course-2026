import { useState } from 'react'
import RestaurantsTabs from '../../restaurants-tabs/restaurants-tabs'
import { restaurants } from '../../../mocks/mock'
import MenuList from '../../menu-list'
import Reviews from '../../reviews'

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
                    <div key={restaurant.id}>
                        <h2>{restaurant.name}</h2>
                        <h3>Меню</h3>
                        <MenuList menu={restaurant.menu} />
                        <h3>Отзывы</h3>
                        <Reviews reviews={restaurant.reviews} />
                    </div>
                )}
            </div>
        </div>
    )
}
