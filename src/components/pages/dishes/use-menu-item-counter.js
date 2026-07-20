import { useDispatch, useSelector } from 'react-redux'
import {
    addDish,
    removeDish,
    selectDishCount,
} from '@/store/features/cart-slice'

const useMenuItemCounter = ({ dishId }) => {
    const dispatch = useDispatch()
    const count = useSelector((state) => selectDishCount(state, { dishId }))

    const onChangeCount = (delta) => {
        const payload = { dishId }
        dispatch(delta === -1 ? removeDish(payload) : addDish(payload))
    }

    return { count, onChangeCount }
}

export default useMenuItemCounter
