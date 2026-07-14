import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {},
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addDish: (state, action) => {
            const { restaurantId, dishId } = action.payload
            const restaurant = state.cart[restaurantId]
            if (!restaurant) {
                state.cart[restaurantId] = { [dishId]: 1 }
                return state
            }
            const count = restaurant[dishId]
            if (!count) {
                state.cart[restaurantId] = {
                    ...state.cart[restaurantId],
                    [dishId]: 1,
                }
                return state
            }
            state.cart[restaurantId][dishId] = count === 5 ? 5 : count + 1
        },
        removeDish: (state, action) => {
            const { restaurantId, dishId } = action.payload
            state.cart[restaurantId][dishId] =
                state.cart[restaurantId][dishId] - 1
            if (state.cart[restaurantId][dishId] === 0) {
                delete state.cart[restaurantId][dishId]
                if (Object.keys(state.cart[restaurantId]).length === 0) {
                    delete state.cart[restaurantId]
                }
            }
        },
    },
    selectors: {
        selectDishCount: (state, { restaurantId, dishId }) =>
            (state.cart[restaurantId] || {})[dishId] || 0,
    },
})

export const { addDish, removeDish } = cartSlice.actions
export const { selectDishCount } = cartSlice.selectors
