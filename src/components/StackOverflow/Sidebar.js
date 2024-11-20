import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import { Link } from 'react-router-dom';
import './CSS/Sidebar.css';

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Home"); // Manage active state

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          {/* Home */}
          <div
            className={`sidebar-option ${activeTab === "Home" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("Home")}
          >
            <Link to="/">
              <div className="mainIcon">
                <HomeOutlinedIcon />
                <p>Home</p>
              </div>
            </Link>
          </div>

          {/* Public */}
          <div
            className={`sidebar-option ${activeTab === "Public" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("Public")}
          >
            <div className="mainIcon">
              <PublicOutlinedIcon />
              <p>PUBLIC</p>
            </div>
            <div className="link">
              <div className="link-tag">
                <Link to="/questions">Questions</Link>
                <Link to="/tags">Tags</Link>
                <Link to="/users">Users</Link>
              </div>
            </div>
          </div>

          {/* Collectives */}
          <div
            className={`sidebar-option ${activeTab === "Collectives" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("Collectives")}
          >
            <div className="mainIcon">
              <StarsOutlinedIcon />
              <p>COLLECTIVES</p>
            </div>
            <div className="link">
              <div className="link-tag">
                <Link to="/collectives/overview">Overview</Link>
                <Link to="/collectives/join">Join Collectives</Link>
              </div>
            </div>
          </div>

          {/* Find a Job */}
          <div
            className={`sidebar-option ${activeTab === "FindAJob" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("FindAJob")}
          >
            <div className="mainIcon">
              <WorkOutlineRoundedIcon />
              <p>FIND A JOB</p>
            </div>
            <div className="link">
              <div className="link-tag">
                <Link to="/jobs">Jobs</Link>
                <Link to="/companies">Companies</Link>
              </div>
            </div>
          </div>

          {/* Teams */}
          <div
            className={`sidebar-option ${activeTab === "Teams" ? "active-tab" : ""}`}
            onClick={() => handleTabClick("Teams")}
          >
            <div className="mainIcon">
              <Groups2RoundedIcon />
              <p>TEAMS</p>
            </div>
            <div className="link">
              <div className="link-tag">
                <Link to="/teams/create">+ Create a team</Link>
                <Link to="/teams/manage">Manage Teams</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;