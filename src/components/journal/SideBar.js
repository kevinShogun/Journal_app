import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const SideBar = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(startLogout() );
    }

    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span>Kevin Garcia</span>
                </h3>


                <button 
                    className="btn"
                    onClick={handleLogOut}
                >
                    Log out
                </button>
            </div>

            <div className="journal__new-entry">
            <img
								className="journal__img-entry"
								src={`../assets/2830540.png`}
								alt="entry button"
							/>
                <p className="mt-5">New Entry</p>
            </div>

            <JournalEntries/>
        </aside>
    )
}
