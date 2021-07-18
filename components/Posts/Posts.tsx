import React from 'react';
import styled from 'styled-components';
import { PostsItem } from './PostsItem';
import { IPost } from '../../types/post';

interface PostsState {
    posts: IPost[];
}

const PostListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 375px);
    justify-content: center;
    gap: 10px;
`;

const Posts: React.FC<PostsState> = ({ posts }) => {
    return (
        <PostListStyled>
            {posts.map((post) => (
                <PostsItem {...post} key={post.id} />
            ))}
        </PostListStyled>
    );
};

export default Posts;
