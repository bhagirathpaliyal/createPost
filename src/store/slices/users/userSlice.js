import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'0',name:'Bhagirath'},
    {id:'1',name:'Sohan'},
    {id:'2',name:'Yogesh'}
]

 const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
 
    }
})

export const selectAllUsers=(state)=>state.users;
export default usersSlice.reducer;

