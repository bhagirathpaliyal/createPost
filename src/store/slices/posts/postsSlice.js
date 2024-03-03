import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

// const initialState=[
//     {id:'1',title:'learning redux' , content:"I've heard good things."},
//     {id:'2',title:'Slices...' , content:"the more i say slices,the more i want pizza"},
// ]


const postsSlice=createSlice({
    name:'posts',
    initialState:[
        {id:'p-1',title:'learning redux' , content:"I've heard good things." , date:sub(new Date(),{minutes:25}).toISOString(),
    },
        {id:'p-2',title:'Redux' , content:"Redux Toolkit is a set of tools that can be used to manage state in React applications" ,  date:sub(new Date(),{minutes:10}).toISOString()},
    ],
    
    reducers:{
        postAdded: (state, action) => {
            
            // Assuming action.payload contains the new post object
            state.push(action.payload);
    },}
})

export const selectAllPosts=(state)=>state.posts

export const {postAdded}=postsSlice.actions
export default postsSlice.reducer