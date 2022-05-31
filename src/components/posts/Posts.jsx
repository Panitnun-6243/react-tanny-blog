import React from 'react'
import Post from '../post/Post'
import "./posts.css"

export default function Posts() {
  return (
      <>
      <div className='component'>component</div>
      <div className='post-category-title'>All Posts</div>
      <div className='all-post-container'>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
      </div>
      </>
    
  )
}
