import React from 'react';
import { Title } from '../../components/Title/Title';
import { MainLayout } from '../../layouts/MainLayout';
import { posts } from '../../db/post';
import { Text } from '../../components/Text';
import { Comments } from '../../components/Comments/Comments';
import Image from 'next/image';
import { articleImg } from '../../assets/images';
import styled from 'styled-components';

const PostFlexStyled = styled.div`
    display: flex;
    column-gap: 20px;
    margin-bottom: 20px;
`;

const Post: React.FC = () => {
    return (
        <MainLayout>
            <section>
                <PostFlexStyled>
                    <Image src={articleImg} width={500} height={500} objectFit={'cover'} alt={posts[0].title} />
                    <div>
                        <Title>{posts[0].title}</Title>
                        <Text>{posts[0].body}</Text>
                    </div>
                </PostFlexStyled>

                <Comments comments={posts[0].comments} />
            </section>
        </MainLayout>
    );
};

export default Post;
