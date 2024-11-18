import React from 'react';
import { Link } from 'react-router-dom';
import AllQuestions from './AllQuestions';
import './CSS/Main.css';

function Main() {
  return (
    <div className='main'>
        <div className='main-container'> 
            <div className='main-top' >
                <h2>Top Question</h2>
            </div>
            <div className='main-dec'>
                <div className='main-filter'>
                    <div className='main-tabs'>
                        <div className='main-tab'>
                            <Link>Interesting</Link>
                        </div>
                        <div className='main-tab'>
                            <Link>Bountled</Link>
                        </div>
                        <div className='main-tab'>
                            <Link>Hot</Link>
                        </div>
                        <div className='main-tab'>
                            <Link>Week</Link>
                        </div>
                        <div className='main-tab'>
                            <Link>Month</Link>
                        </div>
                    </div>

                </div>
                <Link><button>ASK QUESTION</button></Link>
            </div>

            <div className='questions'>
                <div className='question'>  
                    <AllQuestions/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Main;
