import React from 'react';
import styled from 'styled-components';
import { PostsItem } from './PostsItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { getPosts } from '../../store/actions-creators/post';

const PostListStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
`;

export const Posts: React.FC = () => {
    const { posts, error } = useTypedSelector((state) => state.posts);

    console.log(posts);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <PostListStyled>
            {posts.map((post) => (
                <PostsItem {...post} key={post.id} />
            ))}
        </PostListStyled>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    dispatch(getPosts());
});
