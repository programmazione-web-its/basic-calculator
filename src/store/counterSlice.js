import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }
const counterSlice =  createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
        state.value++
        },
        decrement(state) {
        state.value--
        },
        incrementByAmount(state, action) {
        state.value += Number(action.payload.amount)
        },
    }
})
