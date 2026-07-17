import { Outlet } from 'react-router'
import RestaurantsTabs from '../restaurants-tabs/restaurants-tabs'

export default function RestaurantsLayout() {
    return (
        <div>
            <RestaurantsTabs />
            <Outlet />
        </div>
    )
}
