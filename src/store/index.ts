import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import productReducer from './products-slice'
import filterReduser from './Search_filter';
const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        product:productReducer,
        filter:filterReduser
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>;