import { NewPostAction, NewPostActionTypes, NewPostState } from '../../types/newPost';

const initialState: NewPostState = {
    title: '',
    text: '',
};

export const newPostReducer = (state = initialState, action: NewPostAction): NewPostState => {
    switch (action.type) {
        case NewPostActionTypes.SET_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        case NewPostActionTypes.SET_TITLE:
            return {
                ...state,
                title: action.payload,
            };
        default:
            return state;
    }
};
