import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

import React from 'react'

const PostUser = ({userId}) => {

    const users=useSelector(selectAllUsers)

    const user=users?.find(user=>user?.name===userId)
  return (<span>By {user?user.name:'Unknown User'}</span>)
}

export default PostUser