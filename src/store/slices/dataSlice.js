import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        value: []
    },
    reducers:{
        load: (state, action) =>{
            state.value = action.payload
        }
    }
})

export const { load } = dataSlice.actions

export const dataReducer = dataSlice.reducer