import React from 'react';

const JournalEntry = () => {
    return (
        <div className="journal_entry pointer">
            
            <div 
                className="journal_entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://iusport.com/upload/images/07_2019/5353_iu-judo.jpg)',
                    backgroundPosition: 'center'
                }}
            >
            </div>

            <div className="journal_entry-body">
                <p className="journal_entry-title">
                    Un nuevo dia
                </p>
                <p className="journal_entry-content">
                   loreEst consectetur ut ea labore enim.
                </p>
            </div>

            <div className="journal_entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};

export default JournalEntry;