import { useSelector } from 'react-redux'
import MenuList from '../menu-list'
import ReviewForm from '../review-form/review-form'
import Reviews from '../reviews/reviews'
import { selectRestaurantById } from '../../store/features/restaurants-slice'
import { useContext } from 'react'
import AuthContext from '../providers/auth-provider/auth-context'

export default function RestaurantView({ id }) {
    const { isAuth } = useContext(AuthContext)
    const restaurant = useSelector((state) => selectRestaurantById(state, id))

    return (
        <div>
            <h2>{restaurant.name}</h2>
            <h3>Меню</h3>
            <MenuList menu={restaurant.menu} />
            <h3>Отзывы</h3>
            <Reviews reviews={restaurant.reviews} />
            {isAuth && <ReviewForm restaurantId={id} />}
        </div>
    )
}
