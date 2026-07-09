import { useState } from 'react'
import RestaurantsTabs from '../../restaurants-tabs/restaurants-tabs'
import { restaurants } from '../../../mocks/mock'
import RestaurantView from '../../restaurant-view/restaurant-view'

export default function RestaurantsLayout() {
    const [restaurant, setRestaurant] = useState(restaurants[0] ?? null)

    const handleAddReview = (review) => {
        const originalRestaurant = restaurants.find(
            (r) => r.id === restaurant.id,
        )
        originalRestaurant.reviews.push(review)

        setRestaurant(structuredClone(originalRestaurant))
    }
    return (
        <div>
            <RestaurantsTabs
                currentRestaurant={restaurant.id}
                onChange={(id) =>
                    setRestaurant(restaurants.find((r) => r.id === id))
                }
            />
            <div>
                {restaurant ? (
                    <RestaurantView
                        key={restaurant.id}
                        restaurant={restaurant}
                        onAddReview={handleAddReview}
                    />
                ) : (
                    <p>Ресторан не выбран</p>
                )}
            </div>
        </div>
    )
}
