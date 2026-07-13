import { useContext } from 'react'
import classes from './review-item.module.css'
import ThemeContext from '../contexts/theme-context'
import classNames from 'classnames'
import { DARK_THEME } from '../../App'

export default function ReviewItem({ user, text, rating }) {
    const theme = useContext(ThemeContext)
    return (
        <div
            className={classNames(classes.container, {
                [classes.dark]: theme === DARK_THEME,
            })}
        >
            <p>Пользователь: {user}</p>
            <p>Ратинг: {rating}</p>
            <p>Текст отзыва:</p>
            {text}
        </div>
    )
}
