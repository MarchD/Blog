import { NewPostAction, NewPostActionTypes } from '../../types/newPost';

export const setTitle = (payload: string): NewPostAction => {
    return { type: NewPostActionTypes.SET_TITLE, payload };
};

export const setText = (payload: string): NewPostAction => {
    return { type: NewPostActionTypes.SET_TEXT, payload };
};
