import classes from './restaurant-tab.module.css'

export default function RestaurantTab({ id, name, selected, onChange }) {
    return (
        <div
            data-selected={selected}
            className={classes.tab}
            onClick={() => onChange(id)}
        >
            {name}
        </div>
    )
}
