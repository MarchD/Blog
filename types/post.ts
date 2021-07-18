export interface IComment {
    id: number;
    postId: number;
    body: string;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    comments?: IComment[];
}

export interface IComments {
    comments: IComment[];
}

export interface PostState {
    posts: IPost[];
    error: string;
}

export enum PostActionTypes {
    GET_POSTS = 'GET_POSTS',
    GET_ERROR = 'GET_ERROR',
    DELETE_POST = 'DELETE_POST',
}

interface GetPostsAction {
    type: PostActionTypes.GET_POSTS;
    payload: IPost[];
}

interface GetPostsErrorAction {
    type: PostActionTypes.GET_ERROR;
    payload: string;
}

interface DeletePostAction {
    type: PostActionTypes.DELETE_POST;
}

export type PostAction = GetPostsAction | GetPostsErrorAction | DeletePostAction;
