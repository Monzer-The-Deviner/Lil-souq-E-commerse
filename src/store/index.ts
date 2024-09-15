import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import productReducer from './products-slice'
import filterReduser from './Search_filter';
import cartReduser from './cart-slice'
const store = configureStore({
    reducer:{
        auth: authSlice,
        product:productReducer,
        filter:filterReduser,
        cart:  cartReduser,
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>;