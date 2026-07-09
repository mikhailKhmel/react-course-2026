import { useState } from 'react'
import classes from './menu-item.module.css'
import Counter from '../counter/counter'

export default function MenuItem({ name }) {
    const [count, setCount] = useState(0)
    const handleChangeCount = (delta) => {
        const newCount = count + delta
        setCount((prevState) =>
            newCount >= 0 && newCount <= 5 ? newCount : prevState,
        )
    }
    return (
        <li className={classes.menuItem}>
            {name}

            <Counter
                count={count}
                min={0}
                max={5}
                onChange={handleChangeCount}
            />
        </li>
    )
}
