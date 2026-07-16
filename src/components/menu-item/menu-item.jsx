import { useContext } from 'react'
import classes from './menu-item.module.css'
import Counter from '../counter/counter'
import AuthContext from '../providers/auth-provider/auth-context'
import { useSelector } from 'react-redux'
import { selectDishById } from '../../store/features/dishes-slice'
import useMenuItemCounter from './use-menu-item-counter'

export default function MenuItem({ dishId }) {
    const { isAuth } = useContext(AuthContext)
    const dish = useSelector((state) => selectDishById(state, dishId))

    const { count, onChangeCount } = useMenuItemCounter({
        dishId,
    })
    return (
        <li className={classes.menuItem}>
            {dish.name}

            {isAuth && (
                <Counter
                    count={count}
                    min={0}
                    max={5}
                    onChange={onChangeCount}
                />
            )}
        </li>
    )
}
