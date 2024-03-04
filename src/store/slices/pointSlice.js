import { createSlice } from "@reduxjs/toolkit";

export const pointSlice = createSlice({
    name: 'point',
    initialState: {
        value: false,
    },
    reducers: {
        changePoint: (state) => {
            state.value = !state.value
        }
    }
})

export const { changePoint } = pointSlice.actions

export const pointReducer = pointSlice.reducer