import React from 'react'
import './CSS/index.css'
import Sidebar from './Sidebar.js'
import Main from './Main'
import RightSidebar from './RightSidebar.js'
function index() {
  return (
    <div className='stack-index'>
      <div className='stack-index-content'>
        <Sidebar/>
        <Main/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default index;
