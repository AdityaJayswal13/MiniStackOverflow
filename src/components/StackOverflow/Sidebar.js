import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import { Link } from 'react-router-dom';
import './CSS/Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-options'>
          <div className='sidebar-option'>
          <div className='mainIcon'>
              <HomeOutlinedIcon />
              <p>Home</p>
            </div>
          </div>
          <div className='sidebar-option'>
            <div className='mainIcon'>
              <PublicOutlinedIcon />
              <p>PUBIC</p>
            </div>
            <div className='link'>
              <div className='link-tag'>
                <Link to="/questions">Questions</Link>
                <Link to="/tags">Tags</Link>
                <Link to="/users">Users</Link>
             </div>
            </div>
        </div>
          <div className='sidebar-option'>
            <div className='mainIcon'>
              <StarsOutlinedIcon />
              <p>COLLECTIVES</p>
            </div>
            <div className='link'>
              <div className='link-tag'>
                <Link to="/explore-jobs">Explore Jobs</Link>
              </div>
            </div>
          </div>
          <div className='sidebar-option'>
            <div className='mainIcon'>
              <WorkOutlineRoundedIcon />
              <p>FIND A JOB</p>
            </div>
            <div className='link'>
              <div className='link-tag'>
                <Link to="/jobs">Jobs</Link>
                <Link to="/companies">Companies</Link>
              </div>
            </div>
          </div>
          <div className='sidebar-option'>
            <div className='mainIcon'>
              <Groups2RoundedIcon />
              <p>TEAMS</p>
            </div>
            <div className='link'>
              <div className='link-tag'>
                <Link to="/create-team">+ Create a team</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;