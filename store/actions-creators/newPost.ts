import { NewPostAction, NewPostActionTypes } from '../../types/newPost';

export const setTitle = (payload: string): NewPostAction => {
    return { type: NewPostActionTypes.SET_TITLE, payload };
};

export const setText = (payload: string): NewPostAction => {
    return { type: NewPostActionTypes.SET_TEXT, payload };
};

export const setNewPostError = (payload: string): NewPostAction => {
    return { type: NewPostActionTypes.SET_ERROR, payload };
};

export const resetNewPost = (): NewPostAction => {
    return { type: NewPostActionTypes.RESET_NEW_POST };
};

export const getNewPost = (payload: number): NewPostAction => {
    return { type: NewPostActionTypes.GET_NEW_POST, payload };
};
