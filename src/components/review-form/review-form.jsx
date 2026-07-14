import { useContext } from 'react'
import Counter from '../counter/counter'
import classes from './review-form.module.css'
import useReviewForm from './use-review-form'
import AuthContext from '../providers/auth-provider/auth-context'
import { useDispatch, useSelector } from 'react-redux'
import {
    addReviewToRestaurant,
    selectRestaurantById,
} from '../../store/features/restaurants-slice'
import { addUser } from '../../store/features/users-slice'
import { v4 } from 'uuid'
import { addReview } from '../../store/features/reviews-slice'

export default function ReviewForm({ restaurantId }) {
    const { isAuth } = useContext(AuthContext)
    const dispatch = useDispatch()
    const currentRestaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId),
    )

    const onAddReview = (review) => {
        const userId = v4()
        dispatch(addUser({ id: userId, name: review.user }))
        dispatch(
            addReview({
                ...review,
                userId,
            }),
        )
        dispatch(
            addReviewToRestaurant({
                restuarantId: currentRestaurant.id,
                reviewId: review.id,
            }),
        )
    }
    const { state, disableClear, disableSubmit, onChange, onReset, onSubmit } =
        useReviewForm({ onAddItem: onAddReview })

    return (
        <div className={classes.container}>
            <h3>Форма отзыва</h3>
            <div className={classes.field}>
                <label htmlFor='user'>Имя</label>
                <input
                    id='user'
                    name='user'
                    value={state.user}
                    onChange={(e) => onChange('user', e.target.value)}
                />
            </div>
            <div className={classes.field}>
                <label htmlFor='text'>Текст</label>
                <textarea
                    id='text'
                    name='text'
                    value={state.text}
                    onChange={(e) => onChange('text', e.target.value)}
                />
            </div>
            <div className={classes.field}>
                <label htmlFor='text'>Рейтинг</label>
                {isAuth && (
                    <Counter
                        count={state.rating}
                        max={5}
                        min={1}
                        onChange={(delta) =>
                            onChange('rating', state.rating + delta)
                        }
                    />
                )}
            </div>
            <div className={classes.buttonRow}>
                <button disabled={disableClear} onClick={onReset}>
                    Очистить
                </button>
                <button disabled={disableSubmit} onClick={onSubmit}>
                    Добавить
                </button>
            </div>
        </div>
    )
}
