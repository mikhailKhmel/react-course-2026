import ReviewItem from '../review-item/review-item'
import classes from './reviews.module.css'

export default function Reviews({ reviews }) {
    if (!reviews || reviews.length === 0)
        return <p>Данные об отзывах отсутствуют</p>

    return (
        <div className={classes.container}>
            {reviews.map((review) => (
                <ReviewItem key={review.id} {...review} />
            ))}
        </div>
    )
}
