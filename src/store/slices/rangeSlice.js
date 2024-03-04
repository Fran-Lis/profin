import { createSlice } from "@reduxjs/toolkit";

export const rangeSlice = createSlice({
    name: 'range',
    initialState: {
        value: {}
    },
    reducers: {
        getRange: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { getRange } = rangeSlice.actions

export const rangeReducer = rangeSlice.reducer