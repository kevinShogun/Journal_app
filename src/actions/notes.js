import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        try {
            const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );
    
            dispatch( activeNote( doc.id, newNote ) );
            dispatch( addNewNote( doc.id, newNote ) );
            
        } catch (error) {
            console.log(error);
        }


    }
}

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = (id, note) => ({
    type: types.notesAddnew,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = ( uid ) => {

    return async( dispatch ) => {
        try {
            
            const notes = await loadNotes( uid );
            dispatch( setNotes( notes ) );  
        } catch (error) {
            console.log(error);
        }
    }
}


export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {

    return async (dispatch, getState) => {
    
        const {uid} = getState().auth;

        if(!note.url){
            delete note.url;
        }
        const notesToFireStore = {...note};
        delete notesToFireStore.id;

        try {
            
            await db.doc(`${uid}/journal/notes${note.id}`).update(notesToFireStore);    
            dispatch( refreshNotes(note.id, notesToFireStore));
        
        } catch (e) {
            Swal.fire('Error', e.message, 'error');
        }


        Swal.fire('Saved', note.title, 'success');
    }
}

export const refreshNotes = (id, note) => ({
    type: types.notesUpdated,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }   
});

export const startImageUploading = (file) => {
   
    return async(dispacth, getState) =>{
        
        const {active : activeNote} = getState().notes;
        console.log(file);
        console.log(activeNote);

        Swal.fire({
            title: 'Uploading...',
            text:'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () =>{
                Swal.showLoading();
            }
        });
        const fileUrl = fileUpload(file);
        console.log(fileUrl);

        activeNote.url = fileUrl;
        dispacth(startSaveNote(activeNote))

        Swal.close();

    }
}


export const startDeleting = (id) => {
    return async (dispacth, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete()
            .catch(
                console.log('error al ekimianr'),
            );
            dispacth(deleteNote(uid));
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload:id
});

export const notesLogout = () => {
    return {
        type: types.notesLogoutCleaning,
    }
}