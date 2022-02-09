import React from 'react';
import { useHistory } from "react-router-dom"

function Posts({ post }) {
  const history = useHistory()

  return (
    <tr onClick={() => {
        history.push({ pathname: `/post/${post.id}`, postData: post })
      }}>
      <td>{post.id}</td>
      <td>{post.title}</td>
    </tr>
  )
}

export default Posts;
