import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    count:0
}


const counterSlice = createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
        increament:(state,{type,payload})=>{
            console.log(payload)
            state.count+=payload;

        },
        decreament:(state,action)=>{
            if(state.count>0){
                state.count = state.count - action.payload;
            }
        }
    }
})

export default counterSlice.reducer;
export const{increament,decreament}=counterSlice.actions;