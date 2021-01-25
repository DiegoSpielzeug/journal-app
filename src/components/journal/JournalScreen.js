import React from 'react';
import NoteScreen from '../notes/NoteScreen';
import NothigSelected from './NothigSelected';
import Sidebar from './Sidebar';

const JournalScreen = () => {
    return (
        <div className="journal_main-content">
            <Sidebar/>

            <main className="journal_main">
                <NoteScreen/>
            </main>
        </div>
    );
};

export default JournalScreen;