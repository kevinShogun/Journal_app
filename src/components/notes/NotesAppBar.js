import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    
    const handleSaveNote = () => {

        dispatch(startSaveNote(active));
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        
        if(file){
            
        }
    }

    const handleSavePicture = () => {
        document.querySelector('#fileSelector').click();
    }

    return (
        <div className="notes__appbar">
        {/* Colocar la fecha de la nota */}
            <span>23 de abril 2020</span>
            <input
                id='fileSelector'
                type='file'
                name='file'
                style={{ display:'none'}}
                onChange={handleFileChange}
            />
            <div>
                <button className="btn"
                    onChange={handleSavePicture}
                >
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
