import { PostAction, PostActionTypes, PostState } from '../../types/post';

const initialState: PostState = {
    posts: [],
    error: '',
};

export const postsReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.GET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case PostActionTypes.GET_POSTS:
            return {
                error: '',
                posts: action.payload,
            };
        default:
            return state;
    }
};
