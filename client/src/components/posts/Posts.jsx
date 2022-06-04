import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../post/Post'
import "./posts.css"

export default function Posts({posts}) {
  return (
      <>
      <div className='component'>component</div>
      <div className='post-category-title'>All Posts</div>
      <div className='all-post-container'>
        {/* <Link to="/post/:postId" className='link'><Post/></Link> */}
          {posts.map((p)=>(
            <Post post={p}/>
          ))}
      </div>
      </>
    
  )
}
