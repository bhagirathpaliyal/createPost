import { useState } from "react";
import {  useDispatch ,useSelector} from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";
import React from 'react'
import { selectAllUsers } from "../users/userSlice";
const AddPostForm = () => {


    const dispatch=useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users=useSelector(selectAllUsers)

    const onTitleChanged=e=>setTitle(e.target.value)
    const onContentChanged=e=>setContent(e.target.value)
    const onUserIdChanged=e=>setUserId(e.target.value)

    const onSavePostClicked=()=>{
        if(title && content&& userId){
            dispatch(
                postAdded({
                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId,

                })
            )
        }
        setContent("")
        setTitle('')
        setUserId('')
    }

    const cansave = Boolean(title)&&Boolean(content)&&Boolean(userId)

    const usersOptions=users?.map(user=>(
        <option key={user.id} >
           {user.name}
        </option>
    ))

  return (
    <div className="">
        <section className="">
            <h2 className="font-bold">Add a New Post</h2>
            <form className="flex flex-col gap-[10px]">
                <label htmlFor="postTitle">Title:</label>
                <input type="text" id="postTitle" 
                name="postTitle"
                value={title}
                onChange={onTitleChanged}/>

                <label htmlFor="postuser">user:</label>
                <select id="postuser" value={userId} onChange={onUserIdChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>

               <label htmlFor="postContent">Content:</label>
                <textarea  
                id="postContent" 
                name="postContent"
                value={content}
                onChange={onContentChanged}/>
                <button className="border border-black mt-[10px] mb-[20px]" type="button" onClick={onSavePostClicked}  disabled={!cansave}>save Post</button> 
               
            </form>
        </section>

    </div>
  )
}

export default AddPostForm;
