import { configureStore } from '@reduxjs/toolkit'
import { restuarantsSlice } from './features/restaurants-slice'
import { dishesSlice } from './features/dishes-slice'
import { reviewsSlice } from './features/reviews-slice'
import { usersSlice } from './features/users-slice'
import { cartSlice } from './features/cart-slice'

const store = configureStore({
    reducer: {
        [restuarantsSlice.name]: restuarantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
    },
})

export default store
