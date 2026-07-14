import RestaurantsTabs from '../../restaurants-tabs/restaurants-tabs'
import RestaurantView from '../../restaurant-view/restaurant-view'
import { useSelector } from 'react-redux'
import { selectCurrentRestaurantId } from '../../../store/features/restaurants-slice'

export default function RestaurantsLayout() {
    const currentRestaurant = useSelector((state) =>
        selectCurrentRestaurantId(state),
    )

    return (
        <div>
            <RestaurantsTabs />
            <div>
                {currentRestaurant ? (
                    <RestaurantView
                        key={currentRestaurant}
                        id={currentRestaurant}
                    />
                ) : (
                    <p>Ресторан не выбран</p>
                )}
            </div>
        </div>
    )
}
