import React from 'react';
import './CSS/AllQuestion.css';
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function AllQuestions({ question }) {
    return (
        <div className="all-questions">
            <div className="all-question-container">
                <div className="all-question-top">
                    {/* Display the question title as a link */}
                    <p>
                        <a href={question.link} target="_blank" rel="noopener noreferrer">
                            {question.title}
                        </a>
                    </p>
                </div>
                <div className="all-question-middle">
                    <div className="all-tags">
                        {/* Map over the tags to display each one */}
                        {question.tags && question.tags.map((tag, index) => (
                            <div key={index} className="each-tag">
                                <p>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="all-question-bottom">
                    <div className="all-options">
                        {/* Display the vote count, answer count, and view count */}
                        <div className="single-option like-button">
                            <ChangeHistoryRoundedIcon />
                            <span>{question.score}</span>
                        </div>
                        <div className="single-option">
                            <ForumOutlinedIcon />
                            <span>{question.answer_count}</span>
                        </div>
                        <div className="single-option">
                            <VisibilityOutlinedIcon />
                            <span>{question.view_count}</span>
                        </div>
                    </div>
                    <div className="each-question-author">
                        <p>
                            Asked {new Date(question.creation_date * 1000).toLocaleString()} by:
                            <span>{question.owner?.display_name}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllQuestions;
