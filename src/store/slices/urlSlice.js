import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
    name: 'url',
    initialState: {
        value: '',
    },
    reducers:{
        writeUrl: (state, action) =>{
            state.value = action.payload
        }
    }
})

export const { writeUrl } = urlSlice.actions

export const urlReducer = urlSlice.reducer