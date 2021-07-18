export interface NewPostState {
    title: string;
    text: string;
    error: string;
}

export enum NewPostActionTypes {
    SET_TITLE = 'SET_TITLE',
    SET_TEXT = 'SET_TEXT',
    SET_ERROR = 'SET_ERROR',
    RESET_NEW_POST = 'RESET_NEW_POST',
}

interface SetTitleAction {
    type: NewPostActionTypes.SET_TEXT;
    payload: string;
}

interface SetTextAction {
    type: NewPostActionTypes.SET_TITLE;
    payload: string;
}

interface SetNewPostError {
    type: NewPostActionTypes.SET_ERROR;
    payload: string;
}

interface ResetNewPost {
    type: NewPostActionTypes.RESET_NEW_POST;
}

export type NewPostAction = SetTextAction | SetTitleAction | SetNewPostError | ResetNewPost;
