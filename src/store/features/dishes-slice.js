import { normalizedDishes } from '@/mocks/normalized-mock'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {}),
    ids: normalizedDishes.map((item) => item.id),
}

export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: initialState,
    selectors: {
        selectDishById: (state, id) => state.entities[id],
        selectDishesIds: (state) => state.ids,
    },
})

export const { selectDishById, selectDishesIds } = dishesSlice.selectors
