import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import React from 'react'
import PostUser from "./PostUser";
import TimeAgo from "./TimeAgo";

const PostsList = () => {

    const posts=useSelector(selectAllPosts)

    const renderedPosts=posts.map((post,index)=>(
      <article key={post.id} className="border border-brown p-[20px] rounded-[10px] ">
            <h2 className="relative right-[0px] bottom-[10px]">{index+1}.</h2>
            <h3 className="font-bold mb-[10px]">{post.title}</h3>
            <p className="w-[500px] h-full flex justify-center flex-wrap text-center ">{post.content.substring(0,100)}</p>
            <p><PostUser userId={post.userId}/> 
           
            
            </p>
 <TimeAgo timestamp={post.date}/>
        </article>
        
    ));

    console.log(posts)
  return (
    <div className="flex flex-col text-center gap-[20px] ">
        <h2 className="font-bold">Posts</h2>
        {renderedPosts}                      
    </div>
  )
} 

export default PostsList