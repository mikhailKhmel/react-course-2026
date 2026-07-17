import { useParams } from 'react-router'
import classes from './reviews.module.css'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../../../store/features/restaurants-slice'
import ReviewItem from './review-item/review-item'
import { useContext } from 'react'
import AuthContext from '../../../providers/auth-provider/auth-context'
import ReviewForm from './review-form/review-form'

export default function Reviews() {
    const { restaurantId } = useParams()
    const { isAuth } = useContext(AuthContext)
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    )
    if (!restaurant || restaurant.reviews.length === 0)
        return <p>Данные об отзывах отсутствуют</p>

    return (
        <div className={classes.container}>
            {restaurant.reviews.map((id) => (
                <ReviewItem key={id} id={id} />
            ))}
            {isAuth && <ReviewForm />}
        </div>
    )
}
