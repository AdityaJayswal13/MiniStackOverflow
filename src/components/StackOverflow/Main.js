import React, { useEffect, useState, useCallback } from 'react';
import './CSS/Main.css';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("Interesting");
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  // UseCallback to memoize the function
  const fetchQuestions = useCallback(async () => {
    const tabParams = {
      Interesting: "votes",
      Bountied: "activity",
      Hot: "hot",
      Week: "week",
      Month: "month",
    };

    const tab = tabParams[selectedTab] || "activity";
    const apiUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=${tab}&site=stackoverflow`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("API Response:", data);

      if (data.items && Array.isArray(data.items)) {
        setQuestions(data.items);
        setError(null);
      } else {
        console.error("Unexpected response structure:", data);
        setQuestions([]);
        setError("Unexpected response structure from API.");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setQuestions([]);
      setError("Failed to fetch questions. Please try again later.");
    }
  }, [selectedTab]);

  
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);
  const formatDuration = (timestamp) => {
    const now = Math.floor(Date.now() / 1000); 
    const durationInSeconds = now - timestamp;
    const secondsInAMonth = 30 * 24 * 60 * 60; 
    const secondsInADay = 24 * 60 * 60; 
  
    const months = Math.floor(durationInSeconds / secondsInAMonth);
    const days = Math.floor((durationInSeconds % secondsInAMonth) / secondsInADay);
  
    return `${months} month${months !== 1 ? 's' : ''} ${days} day${days !== 1 ? 's' : ''} ago`;
  };
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>Top Questions</h2>
        </div>
        <div className="main-dec">
          <div className="main-filter">
            <div className="main-tabs">
              {["Interesting", "Bountied", "Hot", "Week", "Month"].map(
                (tab) => (
                  <div
                    key={tab}
                    className="main-tab"
                    onClick={() => setSelectedTab(tab)}
                  >
                    <span className={selectedTab === tab ? "active" : ""}>
                      {tab}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <button>ASK QUESTION</button>
        </div>

        {/* Render questions */}
        <div className="questions">
          {Array.isArray(questions) && questions.length > 0 ? (
            questions.map((question) => (
              <div key={question.question_id} className="question-card">
                <h3>{question.title}</h3>
                <div className="tags">
                  {question.tags &&
                    question.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                </div>
                <div className="info">
                  <div className="info-content">
                  
                  <div className="info-buttons">
                    <div className="icon likes">
                      <ChangeHistoryIcon />
                    </div>
                    <div className="icon-info">
                      <span>{question.score}</span>
                    </div>
                  </div>
                  <div className="info-buttons">
                    <div className="icon">
                      <ForumOutlinedIcon />
                    </div>
                    <div className="icon-info">
                      <span>{question.answer_count}</span>
                    </div>
                  </div>
                  <div className="info-buttons">
                    <div className="icon">
                      <RemoveRedEyeOutlinedIcon />
                    </div>
                    <div className="icon-info">
                      <span>{question.view_count}</span>
                    </div>
                  </div>
                  </div>
                  <p className="author">
                    asked  {formatDuration(question.creation_date)}: <strong>{question.owner?.display_name || "Anonymous"}</strong>
                    {' '}
                    
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No questions available.</p>
          )}
        </div>

        {/* Display error messages */}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default Main;
