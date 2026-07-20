import classes from './menu-item.module.css'
import { useSelector } from 'react-redux'
import { selectDishById } from '@/store/features/dishes-slice'
import { NavLink } from 'react-router'

export default function MenuItem({ dishId }) {
    const dish = useSelector((state) => selectDishById(state, dishId))

    return (
        <NavLink to={`/dishes/${dishId}`} className={classes.link}>
            <li className={classes.menuItem}>{dish.name}</li>
        </NavLink>
    )
}
