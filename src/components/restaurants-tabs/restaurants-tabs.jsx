import { restaurants } from '../../mocks/mock'
import RestaurantTab from '../restaurant-tab/restaurant-tab'
import classes from './restaurants-tabs.module.css'

export default function RestaurantsTabs({ currentRestaurant, onChange }) {
    if (!restaurants || restaurants.length === 0)
        return <p>Данные отсутствуют</p>
    return (
        <div className={classes.tabs}>
            {restaurants.map((r) => (
                <RestaurantTab
                    key={r.id}
                    id={r.id}
                    name={r.name}
                    selected={currentRestaurant === r.id}
                    onChange={onChange}
                />
            ))}
        </div>
    )
}
