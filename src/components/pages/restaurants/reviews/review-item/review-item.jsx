import { useContext } from 'react'
import classes from './review-item.module.css'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import ThemeContext, {
    DARK_THEME,
} from '../../../../providers/theme-provider/theme-context'
import { selectUserById } from '../../../../../store/features/users-slice'
import { selectReviewById } from '../../../../../store/features/reviews-slice'

export default function ReviewItem({ id }) {
    const { userId, rating, text } = useSelector((state) =>
        selectReviewById(state, id),
    )
    const user = useSelector((state) => selectUserById(state, userId))
    const { theme } = useContext(ThemeContext)
    return (
        <div
            className={classNames(classes.container, {
                [classes.dark]: theme === DARK_THEME,
            })}
        >
            <p>Пользователь: {user.name}</p>
            <p>Ратинг: {rating}</p>
            <p>Текст отзыва:</p>
            {text}
        </div>
    )
}
