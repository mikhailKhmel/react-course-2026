import { useSelector } from 'react-redux'
import { selectRestaurantById } from '@/store/features/restaurants-slice'
import NavLinkTab from '@/components/common/navlink-tab/navlink-tab'

export default function RestaurantTab({ id }) {
    const restaurant = useSelector((state) => selectRestaurantById(state, id))

    return <NavLinkTab to={`/restaurants/${id}`}>{restaurant.name}</NavLinkTab>
}
