import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    client:{toggleForm:false}
}
export const ReducerSlice = createSlice({
    name:'crudapp',
    initialState,
    reducers:{
toggleChanceAction:(state)=>{
state.client.toggleForm = !state.client.toggleForm
}
    }
})

export const {toggleChanceAction} = ReducerSlice.actions

export default ReducerSlice.reducer;