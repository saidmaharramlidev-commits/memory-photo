import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    isNavbarOpen: boolean
}

const initialState: CounterState = {
    isNavbarOpen: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNavbarOpen: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen

        }

    },
})

export const { setNavbarOpen } = counterSlice.actions

export default counterSlice.reducer