import { useContext } from 'react'
import classes from './menu-item.module.css'
import Counter from '../counter/counter'
import AuthContext from '../providers/auth-provider/auth-context'
import { useDispatch, useSelector } from 'react-redux'
import { selectDishById } from '../../store/features/dishes-slice'
import {
    addDish,
    removeDish,
    selectDishCount,
} from '../../store/features/cart-slice'
import { selectCurrentRestaurantId } from '../../store/features/restaurants-slice'

export default function MenuItem({ id }) {
    const dispatch = useDispatch()
    const restaurantId = useSelector((state) =>
        selectCurrentRestaurantId(state),
    )
    const dish = useSelector((state) => selectDishById(state, id))
    const count = useSelector((state) =>
        selectDishCount(state, { restaurantId, dishId: id }),
    )
    const { isAuth } = useContext(AuthContext)
    const handleChangeCount = (delta) => {
        const payload = { restaurantId, dishId: id }
        dispatch(delta === -1 ? removeDish(payload) : addDish(payload))
    }
    return (
        <li className={classes.menuItem}>
            {dish.name}

            {isAuth && (
                <Counter
                    count={count}
                    min={0}
                    max={5}
                    onChange={handleChangeCount}
                />
            )}
        </li>
    )
}
