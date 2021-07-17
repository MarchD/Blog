export interface NewPostState {
    title: string;
    text: string;
}

export enum NewPostActionTypes {
    SET_TITLE = 'SET_TITLE',
    SET_TEXT = 'SET_TEXT',
}

interface SetTitleAction {
    type: NewPostActionTypes.SET_TEXT;
    payload: string;
}

interface SetTextAction {
    type: NewPostActionTypes.SET_TITLE;
    payload: string;
}

export type NewPostAction = SetTextAction | SetTitleAction;
