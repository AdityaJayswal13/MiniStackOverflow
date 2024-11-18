import React from 'react'
import './CSS/RightSidebar.css'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import WaterfallChartOutlinedIcon from '@mui/icons-material/WaterfallChartOutlined';
function RightSidebar() {
  return (
    <div className='right-sidebar'>
      <div className='right-sidebar-container'>
        <div className='right-sidebar-upper-section'>
        <div className='overflow-blog'>
        <div className='right-sidebar-header'>
          <h2>The Overflow Blog</h2>
        </div>
        <div className='points'>
          <div className='desc-point'>
            <ModeEditOutlinedIcon/>
            <span>The unexpected benefit of mentoring others</span>
          </div>
          <div className='desc-point'>
            <ModeEditOutlinedIcon/>
            <span>Podcast 354:Building for AR with Niantic Labs` augmented reality SDK</span>
          </div>
        </div>
        </div>
        <div className='features-section'>
        <div className='right-sidebar-header'>
          <h2>Featured & meta</h2>
        </div>
        <div className='points'>
          <div className='desc-point'>
            <WaterfallChartOutlinedIcon/>
            <span>Beta release of Collectives<sup>TM</sup> on Stack Overflow</span>
          </div>
        </div>
        </div>
        </div>
        <div className='right-sidebar-middle-section'>
        <div className='post-section'>
        <div className='right-sidebar-header'>
          <h2>Hot meta post</h2>
        </div>
        <div className='points'>
          <div className='desc-point'>
            <h3>8</h3>
            <span>Tags driver and device-driver appear to be redundant</span>
          </div>
          <div className='desc-point'>
          <h3>27</h3>
            <span>How to handle dupes where A is closed as dup of B but I have an answer thant...</span>
          </div>
          <div className='desc-point'>
          <h3>27</h3>
            <span>Ambiguous tag containers</span>
          </div>
        </div>
        </div>
        </div>
        <div className='right-sidebar-bottom-section'>
          <div className='bottom-header'>
            <h3>Custom filter</h3>
          </div>
          <div className='add-filters'>
            <p>add custom filters</p>
          </div>
        </div>

        </div>
    </div>
  )
}

export default RightSidebar;
