import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleInputChage, reset] = useForm(note);

    const{body, title} = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {

        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }    

    }, [note, reset]);

    useEffect(() => {
        dispatch( activeNote(formValues.id, {...formValues}) );

    }, [formValues, dispatch]);

    return (
        <div className="notes__main-content">
            <NotesAppBar/> 

            <div className="notes__content">
                <input type="text"
                    placeholder="Some Awesone Title"
                    name="title"
                    autocomplete="off"
                    className="notes__title-input"
                    value={title}
                    onChange={handleInputChage}
                />
                <br />
                <br />
                <textarea
                    placeholder="What happend Today?"
                    className="notes__textarea"
                    name='body'
                    value={body}
                    onChange={handleInputChage}
                ></textarea>
            </div>

            {
                (note.url) 
                && 
                (
                    <div className="notes__image">
                        <img 
                            src={`../assets/undraw_online_discussion_5wgl.svg`}
                            alt="Source illustration"
                        />
                    </div>
                )
            }
        </div>
    )
}
