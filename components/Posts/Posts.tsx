import React from 'react';
import styled from 'styled-components';
import { posts } from '../../db/post';
import { PostsItem } from './PostsItem';

const PostListStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
`;

export const Posts: React.FC = () => {
    return (
        <PostListStyled>
            {posts.map((post) => (
                <PostsItem {...post} key={post.id} />
            ))}
        </PostListStyled>
    );
};
