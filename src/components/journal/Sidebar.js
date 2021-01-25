import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import JournalEntries from './JournalEntries';

const Sidebar = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <aside className="journal_sidebar">
            <div className="journal_sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Diego</span>
                </h3>

                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    logout
                </button>
            </div>

            <div className="journal_new-entry">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    new entry
                </p>
            </div>

            <JournalEntries/>
        </aside>
    );
};

export default Sidebar;