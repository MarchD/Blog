import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { newPostReducer } from './newPostReducer';
import { postsReducer } from './postReducer';

const rootReducer = combineReducers({
    newPost: newPostReducer,
    posts: postsReducer,
});

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};

export type RootState = ReturnType<typeof rootReducer>;
