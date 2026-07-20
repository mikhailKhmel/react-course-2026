import { useSelector } from 'react-redux'
import { selectRestaurantById } from '@/store/features/restaurants-slice'
import classes from './restaurant-view.module.css'
import { Outlet, useParams } from 'react-router'
import NavLinkTab from '@/components/common/navlink-tab/navlink-tab'

export default function RestaurantView() {
    const { restaurantId } = useParams()

    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    )

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <div className={classes.tabs}>
                <NavLinkTab to='menu'>Меню</NavLinkTab>
                <NavLinkTab to='reviews'>Отзывы</NavLinkTab>
            </div>
            <Outlet />
        </div>
    )
}
