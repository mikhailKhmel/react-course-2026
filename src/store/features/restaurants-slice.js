import { createSlice } from '@reduxjs/toolkit'
import { normalizedRestaurants } from '../../mocks/normalized-mock'

const initialState = {
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {}),
    ids: normalizedRestaurants.map((item) => item.id),
    currentRestaurantId: normalizedRestaurants[0].id,
}

export const restuarantsSlice = createSlice({
    name: 'restaurants',
    initialState: initialState,
    reducers: {
        changeRestuarantTab: (state, action) => {
            state.currentRestaurantId = action.payload
        },
        addReviewToRestaurant: (state, action) => {
            const { restuarantId, reviewId } = action.payload
            state.entities[restuarantId].reviews.push(reviewId)
            return state
        },
    },
    selectors: {
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsIds: (state) => state.ids,
        selectCurrentRestaurantId: (state) => state.currentRestaurantId,
    },
})

export const {
    selectRestaurantById,
    selectRestaurantsIds,
    selectCurrentRestaurantId,
} = restuarantsSlice.selectors

export const { addReviewToRestaurant, changeRestuarantTab } =
    restuarantsSlice.actions
