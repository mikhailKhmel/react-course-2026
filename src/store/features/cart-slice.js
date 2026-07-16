import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {},
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addDish: (state, action) => {
            const { dishId } = action.payload
            const count = (state.cart[dishId] || 0) + 1
            state.cart[dishId] = count === 5 ? 5 : count
        },
        removeDish: (state, action) => {
            const { dishId } = action.payload
            state.cart[dishId] = state.cart[dishId] - 1
            if (state.cart[dishId] === 0) {
                delete state.cart[dishId]
            }
        },
    },
    selectors: {
        selectDishCount: (state, { dishId }) => state.cart[dishId] || 0,
    },
})

export const { addDish, removeDish } = cartSlice.actions
export const { selectDishCount } = cartSlice.selectors
