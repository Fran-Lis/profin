import { configureStore } from "@reduxjs/toolkit";
import { pointReducer } from "./slices/pointSlice";
import { urlReducer } from "./slices/urlSlice";
import { dataReducer } from "./slices/dataSlice";
import { rangeReducer } from "./slices/rangeSlice";
import { countriesReducer } from "./slices/countriesSlice";

export default configureStore({
    reducer: {
        point: pointReducer,
        url: urlReducer,
        data: dataReducer,
        range: rangeReducer,
        country: countriesReducer
    }
})