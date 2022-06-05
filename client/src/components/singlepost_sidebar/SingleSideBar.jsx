import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./singlesidebar.css"

export default function SingleSideBar() {

  return (
    <div className='single-sidebar-container'>
      <div className='user-image-container'>
        <img src='https://picsum.photos/400/300' alt='pic' className='user-avatar'/>
      </div>
      <div className='user-display-name-container'>Panitnun Suvannabun</div>
      <div className='user-description-container'>
        <strong className='description'>Description</strong><div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></div>
    </div>
  )
}
