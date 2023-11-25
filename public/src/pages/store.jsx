import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
export const store = configureStore({
    reducer:{
        deger: counterReducer
    }
})
export default store;