import { Dispatch } from 'react';
import { PostAction, PostActionTypes } from '../../types/post';
import axios from 'axios';

export const getPosts = () => {
    return (dispatch: Dispatch<PostAction>) => {
        axios
            .get('https://simple-blog-api.crew.red/posts')
            .then((res) => {
                dispatch({ type: PostActionTypes.GET_POSTS, payload: res.data });
            })
            .catch((e) => dispatch({ type: PostActionTypes.GET_ERROR, payload: e.response.message }));
    };
};
