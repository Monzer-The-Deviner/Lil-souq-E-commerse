import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState : {productId:string|null} ={
    productId : null
} 

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setProductId(state,action:PayloadAction<string>){
            state.productId = action.payload
        }
    }
})
export const {setProductId} = productSlice.actions
export default productSlice.reducer