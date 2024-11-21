import React, { useState, useEffect } from 'react';
import './CSS/Header.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (query) => {
        if (!query) return; // Don't fetch if the query is empty
        try {
            setLoading(true);
            const response = await fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${query}&site=stackoverflow`);
            const json = await response.json();
            setResults(json.items || []);
            setError(null);
        } catch (error) {
            setError(error.message);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (value) => {
        setInput(value);
        if (!value) {
            setResults([]);
            setError(null);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchData(input);
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [input]);

    return (
        <div className='header-search-container'>
            <input
                placeholder='Search Your Answer Here...'
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                aria-label="Search Stack Overflow"
            />
            <SearchIcon />
            {loading && <div className='search-results'>Loading...</div>}
            {error && <div className='search-results'>Error: {error}</div>}
            {results.length === 0 && input && !loading && !error && (
                <div className='search-results'>No results found.</div>
            )}
            {results.length > 0 && (
                <div className='search-results'>
                    {results.map((item) => (
                        <div key={item.question_id}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchBar;