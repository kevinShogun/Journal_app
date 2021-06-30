import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    
    const handleSaveNote = () => {

        dispatch(startSaveNote(active));
    }

    return (
        <div className="notes__appbar">
            <span>23 de abril 2020</span>
            <div>
                <button className="btn">
                <i className="far fa-image"></i> Picture
                </button>

                <button 
                className="btn"
                onClick={handleSaveNote}>
                <i className="far fa-save"></i> Save
                </button>
            </div>
        </div>
    )
}
