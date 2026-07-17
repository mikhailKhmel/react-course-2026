import { useParams } from 'react-router'
import MenuItem from '../menu-item/menu-item'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../../../store/features/restaurants-slice'

export default function MenuList() {
    const { restaurantId } = useParams()
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    )
    if (!restaurant || restaurant.menu.length === 0)
        return <p>Данные о меню отсутствуют</p>
    return (
        <ul>
            {restaurant.menu.map((menuId) => (
                <MenuItem key={menuId} dishId={menuId} />
            ))}
        </ul>
    )
}
