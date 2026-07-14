import { useContext, useState } from 'react'
import classes from './menu-item.module.css'
import Counter from '../counter/counter'
import AuthContext from '../providers/auth-provider/auth-context'

export default function MenuItem({ name }) {
    const { isAuth } = useContext(AuthContext)
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
