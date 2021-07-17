import React from 'react';
import styled from 'styled-components';
import { posts } from '../../db/post';
import { Post } from './Post';

const PostListStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
`;

export const PostList: React.FC = () => {
    return (
        <PostListStyled>
            {posts.map((post) => (
                <Post {...post} key={post._id} />
            ))}
        </PostListStyled>
    );
};
