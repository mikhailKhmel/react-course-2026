import classNames from 'classnames'
import classes from './restaurant-tab.module.css'
import { useContext } from 'react'
import ThemeContext from '../contexts/theme-context'
import { DARK_THEME } from '../../App'

export default function RestaurantTab({ id, name, selected, onChange }) {
    const theme = useContext(ThemeContext)
    return (
        <div
            className={classNames(classes.tab, {
                [classes.dark]: theme === DARK_THEME,
                [classes.selected]: selected,
            })}
            onClick={() => onChange(id)}
        >
            {name}
        </div>
    )
}
