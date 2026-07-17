import { createSlice } from '@reduxjs/toolkit'
import { normalizedUsers } from '../../mocks/normalized-mock'

const initialState = {
    entities: normalizedUsers.reduce((acc, item) => {
        acc[item.id] = item
        return acc
    }, {}),
    ids: normalizedUsers.map((item) => item.id),
}

export const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            state.entities[action.payload.id] = action.payload
            state.ids = [...state.ids, action.payload.id]
        },
    },
    selectors: {
        selectUserById: (state, id) => state.entities[id],
        selectUsersIds: (state) => state.ids,
    },
})

export const { selectUserById, selectUsersIds } = usersSlice.selectors
export const { addUser } = usersSlice.actions
