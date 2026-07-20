import { normalizedRestaurants } from '@/mocks/normalized-mock'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {}),
    ids: normalizedRestaurants.map((item) => item.id),
}

export const restuarantsSlice = createSlice({
    name: 'restaurants',
    initialState: initialState,
    reducers: {
        addReviewToRestaurant: (state, action) => {
            const { restuarantId, reviewId } = action.payload
            state.entities[restuarantId].reviews.push(reviewId)
            return state
        },
    },
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
    },
})

export const { selectRestaurantById, selectRestaurantsIds } =
    restuarantsSlice.selectors

export const { addReviewToRestaurant } = restuarantsSlice.actions
