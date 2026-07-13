import { useContext } from 'react'
import classes from './counter.module.css'
import AuthContext from '../contexts/auth-context'

export default function Counter({ count, min, max, onChange }) {
    const { isAuth } = useContext(AuthContext)
    return (
        <div className={classes.counter}>
            {isAuth && (
                <button disabled={count === min} onClick={() => onChange(-1)}>
                    -
                </button>
            )}
            {count}
            {isAuth && (
                <button disabled={count === max} onClick={() => onChange(1)}>
                    +
                </button>
            )}
        </div>
    )
}
