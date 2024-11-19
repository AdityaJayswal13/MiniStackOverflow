import React, { useEffect, useState, useCallback } from 'react';
import './CSS/Main.css';

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
    const apiUrl = 'https://api.stackexchange.com/2.3/questions?order=desc&sort=${tab}&site=stackoverflow';


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

  // UseEffect to call the fetchQuestions
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

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
                  <span>{question.score} votes</span> |{" "}
                  <span>{question.answer_count} answers</span> |{" "}
                  <span>{question.view_count} views</span>
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
