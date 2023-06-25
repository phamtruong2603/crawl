import { createSlice } from '@reduxjs/toolkit';


const reducerCounter = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment(state, action) {
            state.counter += action.payload
        },
        decrement(state, action) {
            state.counter--
        }
    }
})

export const { increment, decrement } = reducerCounter.actions
export const counterReducer = reducerCounter.reducer;