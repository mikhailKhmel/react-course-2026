import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import useMenuItemCounter from './use-menu-item-counter'
import { useContext } from 'react'
import AuthContext from '@/components/providers/auth-provider/auth-context'
import Counter from '@/components/common/counter/counter'
import { selectDishById } from '@/store/features/dishes-slice'

const DishView = () => {
    const navigate = useNavigate()
    const { dishId } = useParams()
    const { isAuth } = useContext(AuthContext)
    const dish = useSelector((state) => selectDishById(state, dishId))
    const { count, onChangeCount } = useMenuItemCounter({ dishId })

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={handleBack}>{'<- Назад'}</button>
            <h3>{dish.name}</h3>
            {isAuth && (
                <Counter
                    count={count}
                    min={0}
                    max={5}
                    onChange={onChangeCount}
                />
            )}
            <p>Цена: {dish.price}</p>
            <p>Ингредиенты:</p>
            <ul>
                {dish.ingredients.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default DishView
