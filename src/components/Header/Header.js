// src/components/Header.js
import React from 'react';
import './CSS/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SpeakerNotesRoundedIcon from '@mui/icons-material/SpeakerNotesRounded';
const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
        <img 
           src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png' 
            alt='Stack Overflow Logo' 
          />
        </div>
        <div className='header-middle'>
          <div className='header-search-container'>
          <input placeholder='Search Your Answer Here...'/>
          <SearchIcon/>
          </div>
          <h3>Products</h3>
        </div>
        <div className='header-right'> 
           <div className='header-right-container'>
            <ChatBubbleOutlineIcon/>
            <EmojiEventsIcon/>
            <SpeakerNotesRoundedIcon/>
            <Avatar/>
           </div>
        </div>
      </div>
    </header>
  );
};
export default Header;