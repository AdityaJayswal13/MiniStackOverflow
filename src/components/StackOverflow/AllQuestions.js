import React from 'react';
import './CSS/AllQuestion.css';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
function AllQuestions() {
  return (
    <div className='all-questions'>
        <div className='all-question-container'>
            <div className='all-question-top'>
                <p>I am not able to use view binding in activity in Kotlin android where I have also used companion object</p>
            </div>
            <div className='all-question-middle'>
                <div className='all-tags'>
                    <div className='each-tag'>
                        <p>Android</p>
                    </div>
                    <div className='each-tag'>
                        <p>Kotlin</p>
                    </div>
                    <div className='each-tag'>
                        <p>Android-Activity</p>
                    </div>
                    <div className='each-tag'>
                        <p>Android-viewbinding</p>
                    </div>
                    <div className='each-tag'>
                        <p>Companion-Object</p>
                    </div>
                </div>
            </div>
            <div className='all-question-bottom'>
                <div className='all-options'>
                    <div className='single-option like-button'>
                        <ChangeHistoryRoundedIcon/>
                        <span>7</span>
                    </div>
                    <div className='single-option'> 
                        <ForumOutlinedIcon/>
                         <span>7</span>
                    </div>
                    <div className='single-option'> 
                        <VisibilityOutlinedIcon/>
                        <span>7</span>
                    </div>   
                </div>
                <div className='each-question-author'>
                    <p>asked 55 seconds ago : <span>veyton</span></p>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AllQuestions
