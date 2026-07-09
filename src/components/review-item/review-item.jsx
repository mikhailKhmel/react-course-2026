import classes from './review-item.module.css'

export default function ReviewItem({ user, text, rating }) {
    return (
        <div className={classes.container}>
            <p>Пользователь: {user}</p>
            <p>Ратинг: {rating}</p>
            <p>Текст отзыва:</p>
            {text}
        </div>
    )
}
