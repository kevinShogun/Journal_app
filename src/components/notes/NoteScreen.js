import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/> 

            <div className="notes__content">
                <input type="text"
                    placeholder="Some Awesone Title"
                    name="notesTitle"
                    autocomplete="off"
                    className="notes__title-input"
                />
                <br />
                <br />
                <textarea
                    placeholder="What happend Today?"
                    className="notes__textarea"
                ></textarea>
            </div>
            <div className="notes__image">
                <img 
                    src={`../assets/undraw_online_discussion_5wgl.svg`}
                    alt="Source illustration"
                />
            </div>
        </div>
    )
}
