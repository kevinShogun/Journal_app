import { types } from "../types/types";

/*
    ejemplo de como va estar construido el state
    {
        notes: [],
        active: null,
        active: {
            id: 'DKJFSHDF654',
            title: '',
            body: '',
            imageUrl: '',
            date: 27/05/2021
        }
    }
*/
const initialState = {
    notes: [],
    active: null
}


export const notesReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return{
                ...state,
                notes: [...action.payload]
            }
        
        default:
            return state;
    }
}