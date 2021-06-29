import React from 'react'

export const NotesAppBar = () => {

    const handleClik = (e) => {
        e.preventDefault();

        
    }

    return (
        <div className="notes__appbar">
            <span>23 de abril 2020</span>
            <div>
                <button className="btn">
                    Picture
                </button>

                <button 
                    onClick={handleClik}
                className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
