import classes from './counter.module.css'

export default function Counter({ count, min, max, onChange }) {
    return (
        <div className={classes.counter}>
            <button disabled={count === min} onClick={() => onChange(-1)}>
                -
            </button>
            {count}
            <button disabled={count === max} onClick={() => onChange(1)}>
                +
            </button>
        </div>
    )
}
