import { Dispatch } from 'react';
import { PostAction, PostActionTypes } from '../../types/post';
import axios from 'axios';

export const getPosts = () => {
    return async (dispatch: Dispatch<PostAction>): Promise<void> => {
        try {
            const response = await axios.get('https://simple-blog-api.crew.red/posts');
            dispatch({ type: PostActionTypes.GET_POSTS, payload: response.data });
        } catch (e) {
            dispatch({ type: PostActionTypes.GET_ERROR, payload: 'Something went wrong' });
        }
    };
};

export const deletePost = (id: number) => {
    return async (dispatch: Dispatch<PostAction>): Promise<void> => {
        try {
            await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
            getPosts();
        } catch (e) {
            dispatch({ type: PostActionTypes.GET_ERROR, payload: 'Something went wrong' });
        }
    };
};
