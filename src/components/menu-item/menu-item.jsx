import { useState } from 'react'
import classes from './menu-item.module.css'

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

            <div className={classes.counter}>
                <button
                    disabled={count === 0}
                    onClick={() => handleChangeCount(-1)}
                >
                    -
                </button>
                {count}
                <button
                    disabled={count === 5}
                    onClick={() => handleChangeCount(1)}
                >
                    +
                </button>
            </div>
        </li>
    )
}
