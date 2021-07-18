import { NewPostAction, NewPostActionTypes, NewPostState } from '../../types/newPost';

const initialState: NewPostState = {
    title: '',
    text: '',
    error: '',
    id: null,
};

export const newPostReducer = (state = initialState, action: NewPostAction): NewPostState => {
    switch (action.type) {
        case NewPostActionTypes.SET_TEXT:
            return {
                ...state,
                text: action.payload,
                error: '',
            };
        case NewPostActionTypes.SET_TITLE:
            return {
                ...state,
                title: action.payload,
                error: '',
            };
        case NewPostActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case NewPostActionTypes.GET_NEW_POST:
            return {
                ...state,
                id: action.payload,
            };
        case NewPostActionTypes.RESET_NEW_POST:
            return initialState;
        default:
            return state;
    }
};
