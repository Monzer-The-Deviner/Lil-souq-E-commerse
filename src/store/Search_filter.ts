import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState  {
    collection:string,  
    title:string
    range:number,
}
const initialState :initialState = {
    collection:'all',  
    range:10000,
    title:''
}
const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setColliction(state,action:PayloadAction<string>){
            state.collection = action.payload
        },
        setTitle(state,action:PayloadAction<string>){
            state.title = action.payload
        },

        setRange(state,action:PayloadAction<number>){
            state.range = action.payload
        }
    }
})
export const filterActions =  filterSlice.actions
export default filterSlice.reducer