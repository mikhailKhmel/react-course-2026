import { normalizedReviews } from '@/mocks/normalized-mock'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entities: normalizedReviews.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {}),
    ids: normalizedReviews.map((item) => item.id),
}

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: initialState,
    reducers: {
        addReview: (state, action) => {
            state.entities[action.payload.id] = action.payload
            state.ids = [...state.ids, action.payload.id]
        },
    },
    selectors: {
        selectReviewById: (state, id) => state.entities[id],
        selectReviewsIds: (state) => state.ids,
    },
})

export const { selectReviewById, selectReviewsIds } = reviewsSlice.selectors

export const { addReview } = reviewsSlice.actions
