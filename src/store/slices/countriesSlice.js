import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
    name: 'country',
    initialState: {
        value: {}
    },
    reducers:{
        loadCountries: (state, action) =>{
            state.value = action.payload
        }
    }
})

export const { loadCountries } = countriesSlice.actions

export const countriesReducer = countriesSlice.reducer