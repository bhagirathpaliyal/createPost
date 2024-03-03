import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts/postsSlice";
import usersReducer from "./slices/users/userSlice";


 const store=configureStore({
    reducer:{
       posts: postsReducer,
       users: usersReducer, 
      
    }
})


export default store