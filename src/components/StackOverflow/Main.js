import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllQuestions from './AllQuestions';
import './CSS/Main.css';

function Main() {
    const [questions, setQuestions] = useState([]);
    const [selectedTab, setSelectedTab] = useState('activity'); // Default to 'activity' (which is the "Recent" tab)
    
    // Effect to load questions whenever the selected tab changes
    useEffect(() => {
        fetchQuestions();
    }, [selectedTab]);

    // Function to fetch questions based on the selected tab
    function fetchQuestions() {
        const tabParams = {
            Interesting: 'interesting',
            Bountled: 'bountied',
            Hot: 'hot',
            Week: 'week',
            Month: 'month'
        };
        
        const tab = tabParams[selectedTab] || 'activity';  // Default to 'activity' if not found
        const apiUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=${tab}&site=stackoverflow`;

        // Using Promises instead of async/await
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setQuestions(data.items); // Set the fetched questions into the state
            })
            .catch(error => {
                console.error("Error fetching questions:", error);
                setQuestions([]); // Optionally handle errors by resetting questions state
            });
    }

    return (
        <div className="main">
            <div className="main-container">
                <div className="main-top">
                    <h2>Top Questions</h2>
                </div>
                <div className="main-dec">
                    <div className="main-filter">
                        <div className="main-tabs">
                            <div className="main-tab" onClick={() => setSelectedTab('Interesting')}>
                                <span className={selectedTab === 'Interesting' ? 'active' : ''}>Interesting</span>
                            </div>
                            <div className="main-tab" onClick={() => setSelectedTab('Bountled')}>
                                <span className={selectedTab === 'Bountled' ? 'active' : ''}>Bountled</span>
                            </div>
                            <div className="main-tab" onClick={() => setSelectedTab('Hot')}>
                                <span className={selectedTab === 'Hot' ? 'active' : ''}>Hot</span>
                            </div>
                            <div className="main-tab" onClick={() => setSelectedTab('Week')}>
                                <span className={selectedTab === 'Week' ? 'active' : ''}>Week</span>
                            </div>
                            <div className="main-tab" onClick={() => setSelectedTab('Month')}>
                                <span className={selectedTab === 'Month' ? 'active' : ''}>Month</span>
                            </div>
                        </div>
                    </div>
                    <Link><button>ASK QUESTION</button></Link>
                </div>

                <div className="questions">
                    {questions.length > 0 ? (
                        questions.map((item) => (
                            <AllQuestions
                                key={item.question_id}
                                question={item}
                            />
                        ))
                    ) : (
                        <p>Loading questions...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
