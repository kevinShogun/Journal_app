import moment from 'moment';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startImageUploading, startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    
    const noteDate = moment(active.date);

    const handleSaveNote = () => {

        dispatch(startSaveNote(active));
        console.log('click');
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        
        if(file){
            dispatch( startImageUploading(file) );    
        }
    }

    const handleSavePicture = () => {

        document.querySelector('#fileSelector').click();
        console.log('click');
    }

    return (
        <div className="notes__appbar">
        {/* Colocar la fecha de la nota */}
            <span>{noteDate.format('MMMM Do YYYY, h:mm:ss a')}</span>
            <input
                id='fileSelector'
                type='file'
                name='file'
                style={{ display:'none'}}
                onChange={handleFileChange}
            />

            <div>
                <button className="btn"
                    onClick={handleSavePicture}
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
