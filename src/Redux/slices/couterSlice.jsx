import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    value:0,
}
export const couterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state)=>{
            state.value +=1;
        },
        decrement : (state) => {
            state.value -= 1;
        },
        resetHandler : (state) => {state.value = 0}
    }

})
export const {increment,decrement,resetHandler} = couterSlice.actions;
export default couterSlice.reducer;